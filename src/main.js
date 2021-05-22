import {getWeatherByCity} from './apiService.js'
const viewElems = {};


const getDOMElem = (id) => {
    return document.getElementById(id);
}

const connectHTMLElems = () => {
    viewElems.mainContainer = getDOMElem('mainContainer');
    viewElems.weatherSearchView = getDOMElem('weatherSearchView');
    viewElems.weatherForecastView = getDOMElem('weatherForecastView');

    viewElems.searchInput = getDOMElem('searchInput');
    viewElems.searchButton = getDOMElem('searchButton');
    viewElems.searchButton = getDOMElem('weatherCityContainer');

    viewElems.searchButton = getDOMElem('weatherCity');
    viewElems.searchButton = getDOMElem('weatherIcon');

    viewElems.searchButton = getDOMElem('weatherCurrentTemp');
    viewElems.searchButton = getDOMElem('weatherMaxTemp');
    viewElems.searchButton = getDOMElem('weatherMinTemp');

    viewElems.searchButton = getDOMElem('returnToSearchBtn');
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener('keydown', onEnterSubmit);
    viewElems.searchButton.addEventListener('click', onClickSubmit);
    viewElems.returnToSearchBtn.addEventListener('click', returnToSearch);
}

const initilizeApp = () => {
    connectHTMLElems();
    setupListeners();
}

const onClickSubmit = event => {
    let query = viewElems.searchInput.value;
    getWeatherByCity(query).then(data => {
        console.log(data);
        switchView();
    });
};

const onEnterSubmit = event => {    
    if (event.key === 'Enter') {
        fadeInOut();
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then(data => {
            console.log(data);
            switchView();
            fadeInOut();
        });
    }
};

const fadeInOut = () => {
    if (viewElems.mainContainer.style.opacity === '1' || viewElems.mainContainer.style.opacity === '') {
        viewElems.mainContainer.style.opacity = '0';
    } else {
        viewElems.mainContainer.style.opacity = '1';
    }
}

const switchView = () => {
    if (viewElems.weatherSearchView.style.display != 'none') {
        viewElems.weatherSearchView.style.display = 'none';
        viewElems.weatherForecastView.style.display = 'block';
    } else {
        viewElems.weatherForecastView.style.display = 'none';
        viewElems.weatherSearchView.style.display = 'flex';
    }
}

const returnToSearch = () => {
    fadeInOut();

    setTimeout(() => {
        switchView();
        fadeInOut();
    }, 500),
}

document.addEventListener('DOMContentLoaded', initilizeApp)