var rutaOrigen = [];
var rutaDestino = [];
var rutaCopia = "D:/MASTER ADVANCED/A plus B";

//generamos los arreglos de origen y destino con 1000 elementos
for(var i=1; i<=1000; i++) {
    var num = ("0000" + i).slice(-4);
    var origenes = "C:/MASTER ADVANCED/A/" + num + "-A.psd";
    var destinos = "C:/MASTER ADVANCED/B/" + num + "-B.psd";
    rutaOrigen.push(origenes);
    rutaDestino.push(destinos);
}

//crear un arreglo para contar las veces que se ha utilizado cada archivo de origen
var contador = new Array(rutaOrigen.length);
for (var i = 0; i < contador.length; i++) {
    contador[i] = 0;
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
    //se actualiza el contador de veces que se uso un archivo de origen con maximo 10 usos
    contador[numAlAzar]++;
    if(contador[numAlAzar] == 10){
        rutaOrigen.splice(numAlAzar, 1);
        contador.splice(numAlAzar, 1);
    }
}
