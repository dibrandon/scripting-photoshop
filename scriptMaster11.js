var rutaOrigen = [];
var rutaDestino = [];
var rutaCopia = "ruta/de/la/carpeta/de/copia";

//generamos los arreglos de origen y destino con 1000 elementos
for(var i=1; i<=1000; i++) {
    var num = ("0000" + i).slice(-4);
    var rutaOrigen = "C:/MASTER ADVANCED/A/Nueva carpeta/" + num + "-A.psd";
    var rutaDestino = "C:/MASTER ADVANCED/B/Nueva carpeta/" + num + "-B.psd";
    origenes.push(rutaOrigen);
    destinos.push(rutaDestino);
}

//generamos un numero al azar
var numAlAzar = Math.floor(Math.random() * rutaOrigen.length);

// seleccionamos el archivo de origen al azar
var docOrigen = app.open(File(rutaOrigen[numAlAzar]));
docOrigen.activeLayer.copy();

for (var i = 0; i < rutaDestino.length; i++) {
    var docDestino = app.open(File(rutaDestino[i]));
    docDestino.activeLayer.select();
    docDestino.paste();
    var copia = new File(rutaCopia + "/copia-" + i +".psd");
    docDestino.saveAs(copia);
    docDestino.close(SaveOptions.DONOTSAVECHANGES);
}
docOrigen.close(SaveOptions.DONOTSAVECHANGES);

// eliminamos el archivo seleccionado del arreglo
rutaOrigen.splice(numAlAzar, 1);