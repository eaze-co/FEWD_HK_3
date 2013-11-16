
document.getElementById('convert').onclick = convert;

function convert() {
	celsius = document.getElementById('celsius').value;
	fahrenheit = convertCelsiusToFahrenheit(celsius);
}

function convertCelsiusToFahrenheit(celsius) {
	fahrenheit = 9/5 * celsius + 32;
	return fahrenheit;
}