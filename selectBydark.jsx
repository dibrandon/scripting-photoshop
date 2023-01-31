var srcFile = File("D:/Escritorio/emergency/master barbed/Illustration_sans_titre 1-1.psd");
var srcDoc = app.open(srcFile);

srcDoc.activeChannels = [Channel.MASTER];
srcDoc.selection.selectAll();
srcDoc.selection.invert();
srcDoc.selection.contract(1);
srcDoc.selection.expand(1);
srcDoc.selection.feather(1);

var dstFile = File.saveDialog("Guardar copia de archivo");
srcDoc.saveAs(dstFile);