var wms_layers = [];

var format_Sedimentasi_vegetasi_0 = new ol.format.GeoJSON();
var features_Sedimentasi_vegetasi_0 = format_Sedimentasi_vegetasi_0.readFeatures(json_Sedimentasi_vegetasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sedimentasi_vegetasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sedimentasi_vegetasi_0.addFeatures(features_Sedimentasi_vegetasi_0);
var lyr_Sedimentasi_vegetasi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sedimentasi_vegetasi_0, 
                style: style_Sedimentasi_vegetasi_0,
                interactive: true,
                title: '<img src="styles/legend/Sedimentasi_vegetasi_0.png" /> Sedimentasi_vegetasi'
            });

lyr_Sedimentasi_vegetasi_0.setVisible(true);
var layersList = [lyr_Sedimentasi_vegetasi_0];
lyr_Sedimentasi_vegetasi_0.set('fieldAliases', {'Panjang': 'Panjang', 'X_Awal': 'X_Awal', 'Y_Awal': 'Y_Awal', 'X_Akhir': 'X_Akhir', 'Y_Akhir': 'Y_Akhir', 'Nama_Jalan': 'Nama_Jalan', 'Posisi': 'Posisi', 'T_Sedimen': 'T_Sedimen', });
lyr_Sedimentasi_vegetasi_0.set('fieldImages', {'Panjang': '', 'X_Awal': '', 'Y_Awal': '', 'X_Akhir': '', 'Y_Akhir': '', 'Nama_Jalan': '', 'Posisi': '', 'T_Sedimen': '', });
lyr_Sedimentasi_vegetasi_0.set('fieldLabels', {'Panjang': 'no label', 'X_Awal': 'no label', 'Y_Awal': 'no label', 'X_Akhir': 'no label', 'Y_Akhir': 'no label', 'Nama_Jalan': 'no label', 'Posisi': 'no label', 'T_Sedimen': 'no label', });
lyr_Sedimentasi_vegetasi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});