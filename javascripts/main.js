$(document).ready(function(){

	const apiKey = "";
	const zipBox = document.getElementById("zipBox");
	$("form").submit(function(e){
		e.preventDefault();
	});

	const loadWeather = (zip) => {
		return new Promise ((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},us&appid=${apiKey}`)
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	const getZip = ()=>{
		zipCode = $("#zipBox").val();
		if (zipBox.validity.patternMismatch) {
			
		} else{
			// console.log(zipCode);
			loadWeather(zipCode).then((results)=>{
				console.log(results);
			});
		}
	};

	const whichKey = () => {
		if(event.keyCode===13) {
			getZip();
		}
	};
	$("#submitZip").click(getZip);
	$("#submitZip").keyup(whichKey);

});