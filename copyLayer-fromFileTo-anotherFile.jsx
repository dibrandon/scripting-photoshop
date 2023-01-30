var srcFile = File("D:/Escritorio/emergency/master barbed/Illustration_sans_titre 1-1.psd");
var dstFile = File("D:/Escritorio/emergency/master barbed/Illustration_sans_titre 2-1.psd");
var srcDoc = app.open(srcFile);
var dstDoc = app.open(dstFile);

var srcLayer = srcDoc.artLayers.getByName("layer_name");
srcLayer.duplicate(dstDoc);

srcDoc.close(SaveOptions.DONOTSAVECHANGES);
dstDoc.close(SaveOptions.SAVECHANGES);
