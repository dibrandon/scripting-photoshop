var rutaOrigen = [];
var rutaDestino = [];
var rutaCopia = "C:/MASTER ADVANCED/A plus B";

//generamos los arreglos de origen y destino con 1000 elementos
for(var i=1; i<=10000; i++) {
    var num = ("0000" + i).slice(-4);
    var origenes = "C:/MASTER ADVANCED/A/Nueva carpeta/" + num + "-A.psd";
    var destinos = "C:/MASTER ADVANCED/B/Nueva carpeta/" + num + "-B.psd";
    rutaOrigen.push(origenes);
    rutaDestino.push(destinos);
}

//recorremos cada archivo de destino
for (var i = 0; i < rutaDestino.length; i++) {
    //generamos un numero al azar
    var numAlAzar = Math.floor(Math.random() * rutaOrigen.length);
    //si el numero al azar es igual a la posicion actual del archivo de destino, generamos un nuevo numero al azar
    while(numAlAzar === i){
       numAlAzar = Math.floor(Math.random() * rutaOrigen.length);
    }
    // seleccionamos el archivo de origen al azar
    var docOrigen = app.open(File(rutaOrigen[numAlAzar]));
    docOrigen.activeLayer.copy();
    var docDestino = app.open(File(rutaDestino[i]));
    // docDestino.activeLayer.select();
    docDestino.paste();
    var nombreArchivoOrigen = rutaOrigen[numAlAzar].split("/").pop().split(".")[0];
    var nombreArchivoDestino = rutaDestino[i].split("/").pop().split(".")[0];
    var nombreCopia = nombreArchivoOrigen + "-" + nombreArchivoDestino + ".psd";
    var copia = new File(rutaCopia + "/" + nombreCopia);
    docDestino.saveAs(copia);
    docDestino.close(SaveOptions.DONOTSAVECHANGES);
    docOrigen.close(SaveOptions.DONOTSAVECHANGES);
}


// eliminamos el archivo seleccionado del arreglo
rutaOrigen.splice(numAlAzar, 1);