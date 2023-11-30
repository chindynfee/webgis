var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_shpsidoarjo_4 = new ol.format.GeoJSON();
var features_shpsidoarjo_4 = format_shpsidoarjo_4.readFeatures(json_shpsidoarjo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shpsidoarjo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shpsidoarjo_4.addFeatures(features_shpsidoarjo_4);
var lyr_shpsidoarjo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shpsidoarjo_4, 
                style: style_shpsidoarjo_4,
                interactive: true,
                title: '<img src="styles/legend/shpsidoarjo_4.png" /> shp sidoarjo'
            });
var format_jalansidoarjo_5 = new ol.format.GeoJSON();
var features_jalansidoarjo_5 = format_jalansidoarjo_5.readFeatures(json_jalansidoarjo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalansidoarjo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalansidoarjo_5.addFeatures(features_jalansidoarjo_5);
var lyr_jalansidoarjo_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalansidoarjo_5, 
                style: style_jalansidoarjo_5,
                interactive: true,
                title: '<img src="styles/legend/jalansidoarjo_5.png" /> jalan sidoarjo'
            });
var format_FasilitasKesehatan_6 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_6 = format_FasilitasKesehatan_6.readFeatures(json_FasilitasKesehatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_6.addFeatures(features_FasilitasKesehatan_6);
var lyr_FasilitasKesehatan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasilitasKesehatan_6, 
                style: style_FasilitasKesehatan_6,
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_6.png" /> Fasilitas Kesehatan'
            });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                interactive: true,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });
var format_SemakBelukar_8 = new ol.format.GeoJSON();
var features_SemakBelukar_8 = format_SemakBelukar_8.readFeatures(json_SemakBelukar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemakBelukar_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemakBelukar_8.addFeatures(features_SemakBelukar_8);
var lyr_SemakBelukar_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SemakBelukar_8, 
                style: style_SemakBelukar_8,
                interactive: true,
                title: '<img src="styles/legend/SemakBelukar_8.png" /> Semak Belukar'
            });
var format_Pemerintahan_9 = new ol.format.GeoJSON();
var features_Pemerintahan_9 = format_Pemerintahan_9.readFeatures(json_Pemerintahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_9.addFeatures(features_Pemerintahan_9);
var lyr_Pemerintahan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemerintahan_9, 
                style: style_Pemerintahan_9,
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_9.png" /> Pemerintahan'
            });
var format_Pendidikan_10 = new ol.format.GeoJSON();
var features_Pendidikan_10 = format_Pendidikan_10.readFeatures(json_Pendidikan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_10.addFeatures(features_Pendidikan_10);
var lyr_Pendidikan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pendidikan_10, 
                style: style_Pendidikan_10,
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_10.png" /> Pendidikan'
            });
var format_saranaibadah_11 = new ol.format.GeoJSON();
var features_saranaibadah_11 = format_saranaibadah_11.readFeatures(json_saranaibadah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saranaibadah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saranaibadah_11.addFeatures(features_saranaibadah_11);
var lyr_saranaibadah_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saranaibadah_11, 
                style: style_saranaibadah_11,
                interactive: true,
                title: '<img src="styles/legend/saranaibadah_11.png" /> sarana ibadah'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(false);lyr_shpsidoarjo_4.setVisible(true);lyr_jalansidoarjo_5.setVisible(true);lyr_FasilitasKesehatan_6.setVisible(true);lyr_Sungai_7.setVisible(true);lyr_SemakBelukar_8.setVisible(true);lyr_Pemerintahan_9.setVisible(true);lyr_Pendidikan_10.setVisible(true);lyr_saranaibadah_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_shpsidoarjo_4,lyr_jalansidoarjo_5,lyr_FasilitasKesehatan_6,lyr_Sungai_7,lyr_SemakBelukar_8,lyr_Pemerintahan_9,lyr_Pendidikan_10,lyr_saranaibadah_11];
lyr_shpsidoarjo_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalansidoarjo_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_FasilitasKesehatan_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_Sungai_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SemakBelukar_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pemerintahan_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Pendidikan_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_saranaibadah_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_shpsidoarjo_4.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_jalansidoarjo_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_FasilitasKesehatan_6.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', });
lyr_Sungai_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SemakBelukar_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Pemerintahan_9.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Pendidikan_10.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_saranaibadah_11.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_shpsidoarjo_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'inline label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalansidoarjo_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_FasilitasKesehatan_6.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_Sungai_7.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SemakBelukar_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pemerintahan_9.set('fieldLabels', {'NAMOBJ': 'inline label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Pendidikan_10.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_saranaibadah_11.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_saranaibadah_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});