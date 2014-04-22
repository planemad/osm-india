var map = L.map('map').setView([28.61, 77.22], 14);

var OpenMapSurfer_Roads = L.tileLayer('http://129.206.74.245:8001/tms_r.ashx?x={x}&y={y}&z={z}', {
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);
