var rutaOrigen = [];
var rutaDestino = "C:/MASTER ADVANCED/D/";
var rutaCopia = "D:/MASTER ADVANCED/C plus D";
var combinaciones = [];
var contador = 0;

//generamos los arreglos de origen
for (var i = 1; i <= 100; i++) {
    var num = ("0000" + i).slice(-4);
    var origenes = "C:/MASTER ADVANCED/C/" + num + "-C.psd";
    rutaOrigen.push(origenes);
}

// Obtenemos todos los archivos de la carpeta de destino
var destinos = new Folder(rutaDestino).getFiles("*.psd");

while (contador < 100) {
    for (var i = 0; i < destinos.length; i++) {
        var numAlAzar = Math.floor(Math.random() * rutaOrigen.length);
        var utilizado = false;
        var combinacion = rutaOrigen[numAlAzar] + "-" + destinos[i];


        for (var j = 0; j < combinaciones.length; j++) {
            if (combinaciones[j] === combinacion) {
                utilizado = true;
                break;
            }
        }
        if (!utilizado) {
            //Buscamos al azar y copiamos la capa activa.
            var docOrigen = app.open(File(rutaOrigen[numAlAzar]));
            docOrigen.activeLayer.copy();
            //
            var docDestino = app.open(destinos[i]);
            docDestino.paste();
            //generamos trazabilidad
            var nombreArchivoOrigen = rutaOrigen[numAlAzar].split("/").pop().split(".")[0];
            var nombreArchivoDestino = destinos[i].name.split(".")[0];
            var nombreCopia = nombreArchivoOrigen + "-" + nombreArchivoDestino + ".psd";
            //se genera nuevo archivo
            var copia = new File(rutaCopia + "/" + nombreCopia);
            docDestino.saveAs(copia);
            //cerramos conexiones y limpiamos variables
            docDestino.close(SaveOptions.DONOTSAVECHANGES);
            docOrigen.close(SaveOptions.DONOTSAVECHANGES);
            docOrigen = null;
            docDestino = null;
            combinaciones.push(combinacion);
            rutaOrigen.splice(numAlAzar, 1);
            contador++;
            if (contador === 100) {
                break;
            }
        }
    }
}