var srcFile = File("D:/Escritorio/emergency/master barbed/Illustration_sans_titre 1-1.psd");

var srcDoc = app.open(srcFile);


var srcLayer = srcDoc.artLayers.getByName("Calque 1");
srcLayer.duplicate(srcDoc);

srcDoc.close(SaveOptions.SAVECHANGES);

