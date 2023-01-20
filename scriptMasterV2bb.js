var rutaOrigen = [];
var rutaDestino = [];
var rutaCopia = "D:/MASTER ADVANCED/A plus B";

//generamos los arreglos de origen y destino con 1000 elementos
for(var i=1; i<=10000; i++) {
    var num = ("0000" + i).slice(-4);
    var origenes = "C:/MASTER ADVANCED/A/" + num + "-A.psd";
    var destinos = "C:/MASTER ADVANCED/B/" + num + "-B.psd";
    rutaOrigen.push(origenes);
    rutaDestino.push(destinos);
}

//recorremos cada archivo de destino y evitamos usar el mismo archivo sobre si mismo.
for (var i = 0; i < rutaDestino.length; i++) {
    var numAlAzar = Math.floor(Math.random() * rutaOrigen.length);
    while(numAlAzar === i){
       numAlAzar = Math.floor(Math.random() * rutaOrigen.length);
    }
    // seleccionamos el archivo de origen al azar y copiamos en destino
    var docOrigen = app.open(File(rutaOrigen[numAlAzar]));
    docOrigen.activeLayer.copy();

    var docDestino = app.open(File(rutaDestino[i]));
    docDestino.paste();
    //generamos trazabilidad
    var nombreArchivoOrigen = rutaOrigen[numAlAzar].split("/").pop().split(".")[0];
    var nombreArchivoDestino = rutaDestino[i].split("/").pop().split(".")[0];
    var nombreCopia = nombreArchivoOrigen + "-" + nombreArchivoDestino + ".psd";
    //se genera nuevo archivo
    var copia = new File(rutaCopia + "/" + nombreCopia);
    docDestino.saveAs(copia);

    docDestino.close(SaveOptions.DONOTSAVECHANGES);
    docOrigen.close(SaveOptions.DONOTSAVECHANGES);

    // eliminamos el archivo seleccionado del arreglo
    rutaOrigen.splice(numAlAzar, 1);
}
