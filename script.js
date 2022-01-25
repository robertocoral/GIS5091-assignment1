var map = L.map('map').setView([38.639005110722664, -90.2845213858883], 12);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var marker1 = L.marker([38.64016894100315, -90.26185283111384]).addTo(map);
marker1.bindPopup("<b>Resturant 1</b><br>Brasserie by Niche").openPopup();

var marker2 = L.marker([38.63575474590475, -90.25209216632098]).addTo(map);
marker2.bindPopup("<b>Resturant 2</b><br>Vicia").openPopup();

var marker3 = L.marker([38.63208627903853, -90.20148583243984]).addTo(map);
marker3.bindPopup("<b>Resturant 3</b><br>Blood & Sand").openPopup();

var marker4 = L.marker([38.64988801319083, -90.33658463042646]).addTo(map);
marker4.bindPopup("<b>Resturant 4</b><br>Cafe Napoli").openPopup();

var marker5 = L.marker([38.619462185207716, -90.25539444931492]).addTo(map);
marker5.bindPopup("<b>Resturant 5</b><br>Elaia").openPopup();


var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

