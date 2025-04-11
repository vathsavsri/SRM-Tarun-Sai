var wms_layers = [];

var format_SBlock_0 = new ol.format.GeoJSON();
var features_SBlock_0 = format_SBlock_0.readFeatures(json_SBlock_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBlock_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBlock_0.addFeatures(features_SBlock_0);
var lyr_SBlock_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBlock_0, 
                style: style_SBlock_0,
                popuplayertitle: 'S Block',
                interactive: true,
                title: '<img src="styles/legend/SBlock_0.png" /> S Block'
            });
var format_GangaHostel_1 = new ol.format.GeoJSON();
var features_GangaHostel_1 = format_GangaHostel_1.readFeatures(json_GangaHostel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GangaHostel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GangaHostel_1.addFeatures(features_GangaHostel_1);
var lyr_GangaHostel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GangaHostel_1, 
                style: style_GangaHostel_1,
                popuplayertitle: 'Ganga Hostel',
                interactive: true,
                title: '<img src="styles/legend/GangaHostel_1.png" /> Ganga Hostel'
            });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Tower1_3 = new ol.format.GeoJSON();
var features_Tower1_3 = format_Tower1_3.readFeatures(json_Tower1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower1_3.addFeatures(features_Tower1_3);
var lyr_Tower1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower1_3, 
                style: style_Tower1_3,
                popuplayertitle: 'Tower 1',
                interactive: true,
                title: '<img src="styles/legend/Tower1_3.png" /> Tower 1'
            });
var format_TennisCourt_4 = new ol.format.GeoJSON();
var features_TennisCourt_4 = format_TennisCourt_4.readFeatures(json_TennisCourt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TennisCourt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TennisCourt_4.addFeatures(features_TennisCourt_4);
var lyr_TennisCourt_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TennisCourt_4, 
                style: style_TennisCourt_4,
                popuplayertitle: 'Tennis Court',
                interactive: true,
                title: '<img src="styles/legend/TennisCourt_4.png" /> Tennis Court'
            });
var format_Tower5_5 = new ol.format.GeoJSON();
var features_Tower5_5 = format_Tower5_5.readFeatures(json_Tower5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower5_5.addFeatures(features_Tower5_5);
var lyr_Tower5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower5_5, 
                style: style_Tower5_5,
                popuplayertitle: 'Tower 5',
                interactive: true,
                title: '<img src="styles/legend/Tower5_5.png" /> Tower 5'
            });
var format_FoodCourt_6 = new ol.format.GeoJSON();
var features_FoodCourt_6 = format_FoodCourt_6.readFeatures(json_FoodCourt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodCourt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodCourt_6.addFeatures(features_FoodCourt_6);
var lyr_FoodCourt_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoodCourt_6, 
                style: style_FoodCourt_6,
                popuplayertitle: 'Food Court',
                interactive: true,
                title: '<img src="styles/legend/FoodCourt_6.png" /> Food Court'
            });
var format_BasketballCourt_7 = new ol.format.GeoJSON();
var features_BasketballCourt_7 = format_BasketballCourt_7.readFeatures(json_BasketballCourt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasketballCourt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasketballCourt_7.addFeatures(features_BasketballCourt_7);
var lyr_BasketballCourt_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasketballCourt_7, 
                style: style_BasketballCourt_7,
                popuplayertitle: 'Basketball Court',
                interactive: true,
                title: '<img src="styles/legend/BasketballCourt_7.png" /> Basketball Court'
            });
var format_Vedavathi_8 = new ol.format.GeoJSON();
var features_Vedavathi_8 = format_Vedavathi_8.readFeatures(json_Vedavathi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vedavathi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vedavathi_8.addFeatures(features_Vedavathi_8);
var lyr_Vedavathi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vedavathi_8, 
                style: style_Vedavathi_8,
                popuplayertitle: 'Vedavathi',
                interactive: true,
                title: '<img src="styles/legend/Vedavathi_8.png" /> Vedavathi'
            });
var format_AdminBlock_9 = new ol.format.GeoJSON();
var features_AdminBlock_9 = format_AdminBlock_9.readFeatures(json_AdminBlock_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdminBlock_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdminBlock_9.addFeatures(features_AdminBlock_9);
var lyr_AdminBlock_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdminBlock_9, 
                style: style_AdminBlock_9,
                popuplayertitle: 'Admin Block',
                interactive: true,
                title: '<img src="styles/legend/AdminBlock_9.png" /> Admin Block'
            });
var format_JCBoseResearchblock_10 = new ol.format.GeoJSON();
var features_JCBoseResearchblock_10 = format_JCBoseResearchblock_10.readFeatures(json_JCBoseResearchblock_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JCBoseResearchblock_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JCBoseResearchblock_10.addFeatures(features_JCBoseResearchblock_10);
var lyr_JCBoseResearchblock_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JCBoseResearchblock_10, 
                style: style_JCBoseResearchblock_10,
                popuplayertitle: 'J C Bose Research block',
                interactive: true,
                title: '<img src="styles/legend/JCBoseResearchblock_10.png" /> J C Bose Research block'
            });
var format_Tower3_11 = new ol.format.GeoJSON();
var features_Tower3_11 = format_Tower3_11.readFeatures(json_Tower3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower3_11.addFeatures(features_Tower3_11);
var lyr_Tower3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower3_11, 
                style: style_Tower3_11,
                popuplayertitle: 'Tower 3',
                interactive: true,
                title: '<img src="styles/legend/Tower3_11.png" /> Tower 3'
            });
var format_XLab_12 = new ol.format.GeoJSON();
var features_XLab_12 = format_XLab_12.readFeatures(json_XLab_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XLab_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XLab_12.addFeatures(features_XLab_12);
var lyr_XLab_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XLab_12, 
                style: style_XLab_12,
                popuplayertitle: 'X Lab',
                interactive: true,
                title: '<img src="styles/legend/XLab_12.png" /> X Lab'
            });
var format_Tower4_13 = new ol.format.GeoJSON();
var features_Tower4_13 = format_Tower4_13.readFeatures(json_Tower4_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower4_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower4_13.addFeatures(features_Tower4_13);
var lyr_Tower4_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower4_13, 
                style: style_Tower4_13,
                popuplayertitle: 'Tower 4',
                interactive: true,
                title: '<img src="styles/legend/Tower4_13.png" /> Tower 4'
            });
var format_CBlock_14 = new ol.format.GeoJSON();
var features_CBlock_14 = format_CBlock_14.readFeatures(json_CBlock_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBlock_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBlock_14.addFeatures(features_CBlock_14);
var lyr_CBlock_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CBlock_14, 
                style: style_CBlock_14,
                popuplayertitle: 'C Block',
                interactive: true,
                title: '<img src="styles/legend/CBlock_14.png" /> C Block'
            });
var format_Tower2_15 = new ol.format.GeoJSON();
var features_Tower2_15 = format_Tower2_15.readFeatures(json_Tower2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower2_15.addFeatures(features_Tower2_15);
var lyr_Tower2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower2_15, 
                style: style_Tower2_15,
                popuplayertitle: 'Tower 2',
                interactive: true,
                title: '<img src="styles/legend/Tower2_15.png" /> Tower 2'
            });

lyr_SBlock_0.setVisible(true);lyr_GangaHostel_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_Tower1_3.setVisible(true);lyr_TennisCourt_4.setVisible(true);lyr_Tower5_5.setVisible(true);lyr_FoodCourt_6.setVisible(true);lyr_BasketballCourt_7.setVisible(true);lyr_Vedavathi_8.setVisible(true);lyr_AdminBlock_9.setVisible(true);lyr_JCBoseResearchblock_10.setVisible(true);lyr_Tower3_11.setVisible(true);lyr_XLab_12.setVisible(true);lyr_Tower4_13.setVisible(true);lyr_CBlock_14.setVisible(true);lyr_Tower2_15.setVisible(true);
var layersList = [lyr_SBlock_0,lyr_GangaHostel_1,lyr_GoogleMaps_2,lyr_Tower1_3,lyr_TennisCourt_4,lyr_Tower5_5,lyr_FoodCourt_6,lyr_BasketballCourt_7,lyr_Vedavathi_8,lyr_AdminBlock_9,lyr_JCBoseResearchblock_10,lyr_Tower3_11,lyr_XLab_12,lyr_Tower4_13,lyr_CBlock_14,lyr_Tower2_15];
lyr_SBlock_0.set('fieldAliases', {'id': 'id', });
lyr_GangaHostel_1.set('fieldAliases', {'id': 'id', });
lyr_Tower1_3.set('fieldAliases', {'id': 'id', });
lyr_TennisCourt_4.set('fieldAliases', {'id': 'id', });
lyr_Tower5_5.set('fieldAliases', {'id': 'id', });
lyr_FoodCourt_6.set('fieldAliases', {'id': 'id', });
lyr_BasketballCourt_7.set('fieldAliases', {'id': 'id', });
lyr_Vedavathi_8.set('fieldAliases', {'id': 'id', });
lyr_AdminBlock_9.set('fieldAliases', {'id': 'id', });
lyr_JCBoseResearchblock_10.set('fieldAliases', {'id': 'id', });
lyr_Tower3_11.set('fieldAliases', {'id': 'id', });
lyr_XLab_12.set('fieldAliases', {'id': 'id', });
lyr_Tower4_13.set('fieldAliases', {'id': 'id', });
lyr_CBlock_14.set('fieldAliases', {'id': 'id', });
lyr_Tower2_15.set('fieldAliases', {'id': 'id', });
lyr_SBlock_0.set('fieldImages', {'id': '', });
lyr_GangaHostel_1.set('fieldImages', {'id': '', });
lyr_Tower1_3.set('fieldImages', {'id': '', });
lyr_TennisCourt_4.set('fieldImages', {'id': '', });
lyr_Tower5_5.set('fieldImages', {'id': '', });
lyr_FoodCourt_6.set('fieldImages', {'id': '', });
lyr_BasketballCourt_7.set('fieldImages', {'id': '', });
lyr_Vedavathi_8.set('fieldImages', {'id': '', });
lyr_AdminBlock_9.set('fieldImages', {'id': '', });
lyr_JCBoseResearchblock_10.set('fieldImages', {'id': '', });
lyr_Tower3_11.set('fieldImages', {'id': '', });
lyr_XLab_12.set('fieldImages', {'id': '', });
lyr_Tower4_13.set('fieldImages', {'id': '', });
lyr_CBlock_14.set('fieldImages', {'id': '', });
lyr_Tower2_15.set('fieldImages', {'id': '', });
lyr_SBlock_0.set('fieldLabels', {'id': 'no label', });
lyr_GangaHostel_1.set('fieldLabels', {'id': 'no label', });
lyr_Tower1_3.set('fieldLabels', {'id': 'no label', });
lyr_TennisCourt_4.set('fieldLabels', {'id': 'no label', });
lyr_Tower5_5.set('fieldLabels', {'id': 'no label', });
lyr_FoodCourt_6.set('fieldLabels', {'id': 'no label', });
lyr_BasketballCourt_7.set('fieldLabels', {'id': 'no label', });
lyr_Vedavathi_8.set('fieldLabels', {'id': 'no label', });
lyr_AdminBlock_9.set('fieldLabels', {'id': 'no label', });
lyr_JCBoseResearchblock_10.set('fieldLabels', {'id': 'no label', });
lyr_Tower3_11.set('fieldLabels', {'id': 'no label', });
lyr_XLab_12.set('fieldLabels', {'id': 'no label', });
lyr_Tower4_13.set('fieldLabels', {'id': 'no label', });
lyr_CBlock_14.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_Tower2_15.set('fieldLabels', {'id': 'no label', });
lyr_Tower2_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});