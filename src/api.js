export const geoApiOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    headers: {
		'X-RapidAPI-Key': 'd3595e9914mshcbe83ef9197d994p16b708jsn6e9228af14dc',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3d1095ef7306e2da91ea49fc068a75c1}";
export const WEATHER_API_KEY = "3d1095ef7306e2da91ea49fc068a75c1";