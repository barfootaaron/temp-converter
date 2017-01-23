//Create Global Variables
var tempInput = document.getElementById("tempInput").value;
var fahrenheit = document.getElementById("convertToFahrenheit");
var celsius = document.getElementById("convertToCelsius");
var convertButton = document.getElementById("convertButton");
var result = document.getElementById("result");

//Function to convert input to Farenheit
function toFahrenheit (f) {
	var fahrenheit= ((f - 32) * 5) / 9;
	console.log(fahrenheit);
	result.innerHTML = fahrenheit + " degrees Fahrenheit";
}

function toCelsius (c) {
	var celsius = ((c * 9) / 5) + 32;
	console.log(celsius);
	result.innerHTML = celsius + " degrees Celsius"
}

function convertInput() {
	console.log("start convertInput function");

	tempInput = document.getElementById('tempInput').value;

	console.log(tempInput);

	for (var i=0; i<tempInput.length; i++) {
		if (convertToFahrenheit.checked === true) {
		toFahrenheit(tempInput);
		} else if (celsius.checked === true)
		toCelsius(tempInput);
		}
	}

function resetPage() {
	reset.innerHTML = "";
}


//Function to convert input to Celcius
