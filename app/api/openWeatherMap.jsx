var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=c11a532b307da0ca57903a2895711f96&units=imperial';


module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;  //query string

	return axios.get(requestUrl).then(function (res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			}else {
				return res.data.main.temp;
			}
		},function(res){
		throw new Error('Unable to fetch weather for that location.');

		});
	}
}