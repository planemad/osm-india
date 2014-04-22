var map = L.map('map').setView([28.61, 77.22], 14);

var OpenMapSurfer_Roads = L.tileLayer('http://129.206.74.245:8001/tms_r.ashx?x={x}&y={y}&z={z}', {
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
});
var osmindia  = L.tileLayer('http://{s}.tile.cloudmade.com/API-key/{styleId}/256/{z}/{x}/{y}.png');
var  mapbox_planemad = new L.mapbox.tileLayer({user: 'planemad', map: 'India-OSM-test'});

var baseMaps = {
    "OSM India": osmindia,
    "Default OSM": mapbox_planemad,
    "OpenMapSurfer Roads": OpenMapSurfer_Roads
};

var overlayMaps = {
};

L.control.layers(baseMaps, overlayMaps).addTo(map);