var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kuzhalmannam_2 = new ol.format.GeoJSON();
var features_kuzhalmannam_2 = format_kuzhalmannam_2.readFeatures(json_kuzhalmannam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuzhalmannam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuzhalmannam_2.addFeatures(features_kuzhalmannam_2);
var lyr_kuzhalmannam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuzhalmannam_2, 
                style: style_kuzhalmannam_2,
                popuplayertitle: 'kuzhalmannam',
                interactive: true,
    title: 'kuzhalmannam<br />\
    <img src="styles/legend/kuzhalmannam_2_0.png" /> AALINGAL<br />\
    <img src="styles/legend/kuzhalmannam_2_1.png" /> CHANTHAPURA<br />\
    <img src="styles/legend/kuzhalmannam_2_2.png" /> CHARAPARAMBU<br />\
    <img src="styles/legend/kuzhalmannam_2_3.png" /> CHITHALI<br />\
    <img src="styles/legend/kuzhalmannam_2_4.png" /> KALAPPETTY<br />\
    <img src="styles/legend/kuzhalmannam_2_5.png" /> KALLENKONAM<br />\
    <img src="styles/legend/kuzhalmannam_2_6.png" /> KANNANUR<br />\
    <img src="styles/legend/kuzhalmannam_2_7.png" /> KARINJAMTHODI<br />\
    <img src="styles/legend/kuzhalmannam_2_8.png" /> KULAVANMUKKU<br />\
    <img src="styles/legend/kuzhalmannam_2_9.png" /> MANJADI<br />\
    <img src="styles/legend/kuzhalmannam_2_10.png" /> MANNAM<br />\
    <img src="styles/legend/kuzhalmannam_2_11.png" /> MANNIRADU<br />\
    <img src="styles/legend/kuzhalmannam_2_12.png" /> PERUMKUNNAM<br />\
    <img src="styles/legend/kuzhalmannam_2_13.png" /> POOPLIKAD<br />\
    <img src="styles/legend/kuzhalmannam_2_14.png" /> PULLUPARA<br />\
    <img src="styles/legend/kuzhalmannam_2_15.png" /> PUTHANTHARA<br />\
    <img src="styles/legend/kuzhalmannam_2_16.png" /> PUTHUCODE<br />\
    <img src="styles/legend/kuzhalmannam_2_17.png" /> THEKKINKADU<br />' });
var format_kzhmroad_3 = new ol.format.GeoJSON();
var features_kzhmroad_3 = format_kzhmroad_3.readFeatures(json_kzhmroad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kzhmroad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kzhmroad_3.addFeatures(features_kzhmroad_3);
var lyr_kzhmroad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kzhmroad_3, 
                style: style_kzhmroad_3,
                popuplayertitle: 'kzhmroad',
                interactive: true,
                title: '<img src="styles/legend/kzhmroad_3.png" /> kzhmroad'
            });
var format_kzhmpoints_4 = new ol.format.GeoJSON();
var features_kzhmpoints_4 = format_kzhmpoints_4.readFeatures(json_kzhmpoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kzhmpoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kzhmpoints_4.addFeatures(features_kzhmpoints_4);
var lyr_kzhmpoints_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kzhmpoints_4, 
                style: style_kzhmpoints_4,
                popuplayertitle: 'kzhmpoints',
                interactive: true,
                title: '<img src="styles/legend/kzhmpoints_4.png" /> kzhmpoints'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_kuzhalmannam_2.setVisible(true);lyr_kzhmroad_3.setVisible(true);lyr_kzhmpoints_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_kuzhalmannam_2,lyr_kzhmroad_3,lyr_kzhmpoints_4];
lyr_kuzhalmannam_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_kzhmroad_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_kzhmpoints_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', 'comman_nam': 'comman_nam', });
lyr_kuzhalmannam_2.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_kzhmroad_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_kzhmpoints_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', 'comman_nam': 'TextEdit', });
lyr_kuzhalmannam_2.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'inline label - visible with data', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - visible with data', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_kzhmroad_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_kzhmpoints_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', 'comman_nam': 'no label', });
lyr_kzhmpoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});