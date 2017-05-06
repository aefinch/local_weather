$(document).ready(function(){

	const apiKey = "";
	const zipBox = document.getElementById("zipBox");
	$("form").submit(function(e){
		e.preventDefault();
	});

	
	
	const loadCurrentWeather = (zip) => {
		return new Promise ((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`)
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};
		// const loadForecast = (zip) => {
		// 	return new Promise ((resolve, reject) => {
		// 		$.ajax(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},us&appid=${apiKey}&units=imperial`)
		// 		.done((data2) => resolve(data2))
		// 		.fail((error2) => reject(error2));
		// 	});
		// };
		
	

	const printCurrentWeather = ()=>{
		zipCode = $("#zipBox").val();
		if (zipBox.validity.patternMismatch) {
			
		} else{
			
			loadCurrentWeather(zipCode).then((results)=>{
				$(".jumbotron").html("");
				let currentTemp = results.main.temp;
				let currentConditions = results.clouds.all;
				let currentAirPressure = results.main.pressure;
				let currentWindSpeed = results.wind.speed;
				$(".jumbotron").append(`<h1>Current Weather</h1>`);
				$(".jumbotron").append(`<h3>Temperature: ${currentTemp}&#176; F</h3>`);
				$(".jumbotron").append(`<h4>Conditions: ${currentConditions}% Cloudy</h4>`);
				$(".jumbotron").append(`<h4>Air Pressure: ${currentAirPressure}</h4>`);
				$(".jumbotron").append(`<h4>Wind Speed: ${currentWindSpeed}mph`);
				$(".jumbotron").append(`<button>3 Day Forecast</button>`);
				$(".jumbotron").append(`<button>7 Day Forecast</button>`);

			}).catch((error) => {
				console.log("current weather error", error);
			});
		}
	};

	const whichKey = () => {
		if(event.keyCode===13) {
			printCurrentWeather();
		}
	};
	$("#submitZip").click(printCurrentWeather);
	$("#submitZip").keyup(whichKey);

});