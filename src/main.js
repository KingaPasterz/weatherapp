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
    viewElems.searchButton.addEventListener('klick', onClickSubmit);
}

const initilizeApp = () => {
    connectHTMLElems();
    setupListeners();
}

const onClickSubmit = () => {};

const onEnterSubmit = event => {    
    if (event.key === 'Enter') {
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then(data => {
            console.log(data);
        });
    }
};

document.addEventListener('DOMContentLoaded', initilizeApp)