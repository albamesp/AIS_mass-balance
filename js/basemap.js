// declare personal mapbox access token to access the mapbox API
L.mapbox.accessToken = 'pk.eyJ1IjoiYWxiYW1lc3AiLCJhIjoiY2lzdDQ0cTJmMDAxdTJ0cWw0cTVoNWdvNiJ9.aU1HJ7zpUuxDYS6UlwOPNA';

///////////////////////////////////////////////////
// CREATE MAP AND INCLUDE GEOCODE SEARCH CAPABILITY

var map = L.mapbox.map('map')
    //.setView([52.871169, -1.090739], 15) // Keyworth, UK
    .setView([73.1, -40.6], 4) // Keyworth, UK - centreish of the markers
    .addControl(L.mapbox.geocoderControl('mapbox.places')); // geocode search

// add the default map for the app (a map from mapbox (outdoor map with text)) - additional layers will be added later
var overviewMap = L.tileLayer('https://api.mapbox.com/styles/v1/chriswills/cir23gikh000ljcnn13ee2y6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hyaXN3aWxscyIsImEiOiJjaXFyeTdhNmgwMDl3aTRubTc2aXZueXhsIn0.ULMwLML50j_FGwrRAWNpEw', {
    isBaseLayer: true
});
overviewMap.addTo(map);

// add the bluemarble satellite image as the basemap 
//var wmsLayer = L.tileLayer.wms('http://demo.opengeo.org/geoserver/ows?', {
//    layers: 'nasa:bluemarble'
//}).addTo(map);

//var wmsLayer = L.tileLayer.wms('http://svs.gsfc.nasa.gov/cgi-bin/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=2915_21223&FORMAT=image/png&WIDTH=1024&HEIGHT=512&CRS=CRS:84&BBOX=-180.0,-90.0,180.0,90.0&STYLES=', {
//    //layers: 'Complete Earth (2048x1024 Image)'
//    layers: '2915-21224'
//}).addTo(map);

//L.tileLayer('https://api.mapbox.com/styles/v1/chriswills/cir23gikh000ljcnn13ee2y6g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hyaXN3aWxscyIsImEiOiJjaXFyeTdhNmgwMDl3aTRubTc2aXZueXhsIn0.ULMwLML50j_FGwrRAWNpEw',{isBaseLayer: true}).addTo(map)

// add map credits and include link to app source code (the github repo)
var credits = L.control.attribution().addTo(map);
credits.addAttribution("© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <br> <a href='https://github.com/Chris35Wills/BPOG_vis/tree/gh-pages'><b>App Source Code</b></a> <br>");

///////////////////////
// ADD DATA AND MARKERS

// FOSSIL DATA
//omnivore.csv('data/fossil_WGS84.csv')
//    .on('ready', function(layer) {
//        this.eachLayer(function(marker) {
//            marker.setIcon(L.mapbox.marker.icon({
//                'marker-color': '#d95f02' //orange
//            }));
//            marker.bindPopup('Type: ' + marker.toGeoJSON().properties.Type + '<br>' +
//                'Species: ' + marker.toGeoJSON().properties.Species + '<br>' +
//                'Date: ' + marker.toGeoJSON().properties.Date + '<br>' +
//                'Time: ' + marker.toGeoJSON().properties.Time + '<br>' +
//                '<img src="img/' + marker.toGeoJSON().properties.Image + '" /><br>' +
//                marker.getLatLng());
//        });
//    })
//    .addTo(map);
//
//////////////////////
//// ADD MARKER LEGEND 
//// adapted from the leaflet chloropleth example: http://leafletjs.com/examples/choropleth.html
//
//// create legend control object
//var legend = L.control({
//    position: 'bottomright'
//});
//
//// function to access colours of markers
//function getColor(d) {
//    return d === 'Fossil' ? '#d95f02' :
//        d === 'Rock' ? '#e7298a' :
//        d === 'Borehole' ? '#7570b3' :
//        d === 'Measurement' ? '#1b9e77' :
//        '#FFEDA0';
//}
//
//legend.onAdd = function(map) {
//
//    var div = L.DomUtil.create('div', 'info legend'),
//        marker = ['Fossil', 'Rock', 'Measurement', 'Borehole'];
//
//    // add legend title
//    div.innerHTML += '<b>Markers</b><br>'
//
//    // loop through the marker list and generate a label with a colored square for each category
//    for (var i = 0; i < marker.length; i++) {
//        div.innerHTML +=
//            '<i style="background:' + getColor(marker[i]) + '"></i> ' +
//            (marker[i] ? marker[i] + '<br>' : '+');
//    }
//
//    return div;
//};
//
//legend.addTo(map);
//
//////////////////////////////
//// ADD ADDITIONAL MAP LAYERS
//
//var labelMap = L.tileLayer('https://api.mapbox.com/styles/v1/chriswills/cir236fq90023cmm9hoqif5w0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hyaXN3aWxscyIsImEiOiJjaXFyeTdhNmgwMDl3aTRubTc2aXZueXhsIn0.ULMwLML50j_FGwrRAWNpEw', {
//    isBaseLayer: false
//});
//
//var SoilGrainMap = L.tileLayer.wms('https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS/MapServer/WMSServer', {
//    layers: 'Parent.Material.Grain.size'
//}, {
//    singleTile: true,
//    isBaseLayer: false,
//});
//
//var soilGroupMap = L.tileLayer.wms('https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS/MapServer/WMSServer', {
//    layers: 'Parent.Material.Soil.group'
//}, {
//    singleTile: true,
//    isBaseLayer: false,
//});
//
//var basemaps = {
//    // outdoor map (with text)
//    'Overview (default)': overviewMap,
//    'Soil grain size': SoilGrainMap,
//    'Soil group': soilGroupMap
//};
//
//var overlay = {
//    'Add labels': labelMap
//};
//
//L.control.layers(basemaps, overlay).addTo(map);
//
//
/////////////////////////////////////////
//// CREATE LEGENDS FOR ADDITIONAL LAYERS
//
//// add soil grain size legend
//var soilGrainSizeLegend = L.control({
//    position: 'bottomleft'
//});
//soilGrainSizeLegend.onAdd = function(map) {
//    var div = L.DomUtil.create('div', 'info legend');
//    // add legend title
//    div.innerHTML += '<b>Soil grain size</b><br>'
//    div.innerHTML += "<iframe src='" + "https://map.bgs.ac.uk/BGS_WMS/legends/soilproperties/pm_soil_texture_simple.png" + "' width='300' height='100' frameborder='0'><///iframe>"
//    return div;
//};
////soilGrainSizeLegend.addTo(map);
//
//
//// add soil group legend
//var soilGroupLegend = L.control({
//    position: 'bottomleft'
//});
//soilGroupLegend.onAdd = function(map) {
//    var div = L.DomUtil.create('div', 'info legend');
//    // add legend title
//    div.innerHTML += '<b>Soil group</b><br>'
//    div.innerHTML += "<iframe src='" + "https://map.bgs.ac.uk/BGS_WMS/legends/soilproperties/pm_soil_group.png" + "' width='300' height='100' frameborder='0'></iframe>"
//    return div;
//};
////soilGroupLegend.addTo(map);
//
//////////////////////////////////////////////////////////////////
//// TURN ADDITIONAL LAYER LEGENDS ON/OFF BASED ON USER EVENTS
//
////set global variables to assist in turning legends on and off
//var soilGrainLegndDef = 'off';
//var soilGroupLegndDef = 'off';
//
//map.on('baselayerchange', function(eventLayer) {
//
//    if (eventLayer.name === 'Soil grain size') {
//
//        alert("You will need to zoom to see this layer\n\nThe scale bar should show a value less than 1000 m");
//
//        // check if legend of other baselayer is active - remove if it is
//        if (soilGroupLegndDef === 'on') {
//            soilGroupLegend.removeFrom(map);
//        }
//
//        // add legend for soil grain size layer
//        soilGrainSizeLegend.addTo(map);
//
//        // reset legend activity status
//        soilGrainLegndDef = 'on';
//        soilGroupLegndDef = 'off';
//
//    } else if (eventLayer.name === 'Soil group') {
//
//        alert("You will need to zoom to see this layer\n\nThe scale bar should show a value less than 1000 m");
//
//        // check if legend of other baselayer is active - remove if it is
//        if (soilGrainLegndDef === 'on') {
//            soilGrainSizeLegend.removeFrom(map);
//        }
//
//        // add legend for soil group layer
//        soilGroupLegend.addTo(map);
//
//        // reset legend activity status
//        soilGroupLegndDef = 'on';
//        soilGrainLegndDef = 'off';
//
//    } else if (eventLayer.name === 'Overview (default)') {
//
//        // check if other legends are active - remove them if they 
//        // are and reset legend activity status
//        if (soilGroupLegndDef === 'on') {
//            soilGroupLegend.removeFrom(map);
//            soilGroupLegndDef = 'off';
//        } else if (soilGrainLegndDef === 'on') {
//            soilGrainSizeLegend.removeFrom(map);
//            soilGrainLegndDef = 'off';
//        } else {
//            // Do nothing
//        }
//
//    }
//});


////////////////////
// ADD MAP SCALE BAR
L.control.scale().addTo(map);

////////////////////
// click event
map.on('click', function(e) {
    alert(e.latlng);
});