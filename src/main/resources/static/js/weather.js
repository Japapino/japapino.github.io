var city = document.querySelector('#location');
var temp = document.querySelector('#temperature');

var XHR = new XMLHttpRequest(); 
XHR.onreadystatechange = function() {

	if (XHR.onreadyState == 4 && XHR.status == 200) {

		city.innerText = JSON.parse(XHR.responseText).name;
		temp.innerText = JSON.parse(XHR.responseText).main.temp;
	}
};

XHR.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e995d3c8cae50d9e3cc14a6293f4dc16');

XHR.send();