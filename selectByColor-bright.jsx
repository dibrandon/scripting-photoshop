var srcFile = File("D:/Escritorio/emergency/master barbed/Illustration_sans_titre 1-1.psd");
var srcDoc = app.open(srcFile);

srcDoc.selection.selectByColor(ColorModel.LAB, [100, 0, 0], SelectionType.BRIGHT, 0, Ranges.SINGLE);

var dstFile = File.saveDialog("Guardar copia de archivo");
srcDoc.saveAs(dstFile);

// srcDoc.close(SaveOptions.SAVECHANGES);