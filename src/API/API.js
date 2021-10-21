const axios = require("axios");

class BaseAPI {
    static instance = axios.create({
        baseURL: 'http://api.openweathermap.org/data/2.5/weather?&appid=d316c32f3756585e4954cc984ddcbc84&units=metric&',

    })
}

export class DataAPI extends BaseAPI {
    static getData = (city) => {
       return this.instance.get(`http://api.openweathermap.org/data/2.5/weather?&appid=d316c32f3756585e4954cc984ddcbc84&units=metric&q=${city}`).then(response => response.data);
    }
}