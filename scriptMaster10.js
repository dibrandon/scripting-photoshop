var rutaOrigen = ["ruta/al/archivo/origen1.psd", "ruta/al/archivo/origen2.psd", "ruta/al/archivo/origen3.psd"];
var rutaDestino = ["ruta/al/archivo/destino1.psd", "ruta/al/archivo/destino2.psd", "ruta/al/archivo/destino3.psd"];
var rutaCopia = "ruta/de/la/carpeta/de/copia";

for (var i = 0; i < rutaOrigen.length; i++) {
    var docOrigen = app.open(File(rutaOrigen[i]));
    docOrigen.activeLayer.copy();
    var docDestino = app.open(File(rutaDestino[i]));
    docDestino.activeLayer.select();
    docDestino.paste();
    docDestino.save();
    var copia = new File(rutaCopia + "/copia-" + i + ".psd");
    docDestino.saveAs(copia);
    docDestino.close(SaveOptions.SAVECHANGES);
    docOrigen.close(SaveOptions.DONOTSAVECHANGES);
}
