var rutaDestino = "C:/MASTER ADVANCED/D/";
var rutaOrigen = "C:/MASTER ADVANCED/E/";
var rutaCopia = "D:/MASTER ADVANCED/C plus D";
var combinaciones = [];
var contador = 0;

// obtenemos todos los archivos de origen de la carpeta
var archivosOrigen = new Folder(rutaOrigen).getFiles(".psd");
var archivosDestino = new Folder(rutaDestino).getFiles(".psd");

while(contador < 100) {
for (var i = 0; i < archivosDestino.length; i++) {
var numAlAzar = Math.floor(Math.random() * archivosOrigen.length);
while(archivosOrigen[numAlAzar].toString() === archivosDestino[i].toString()){
numAlAzar = Math.floor(Math.random() * archivosOrigen.length);
}
var utilizado = false;
var combinacion = archivosOrigen[numAlAzar].toString() + "-" + archivosDestino[i].toString();

    for (var j = 0; j < combinaciones.length; j++){
        if(combinaciones[j] === combinacion){
            utilizado = true;
            break;
        }
    }
    if(!utilizado){
        //Buscamos al azar y copiamos la capa activa.
        var docOrigen = app.open(archivosOrigen[numAlAzar]);
        docOrigen.activeLayer.copy();
        //
        var docDestino = app.open(archivosDestino[i]);
        var capaPegada = docDestino.paste();
        var numeroCapas = docDestino.layers.length;
        docDestino.activeLayer.move(docDestino.layers[numeroCapas-1], ElementPlacement.PLACEAFTER);
        //generamos trazabilidad
        var nombreArchivoOrigen = archivosOrigen[numAlAzar].toString().split("/").pop().split(".")[0];
        var nombreArchivoDestino = archivosDestino[i].toString().split("/").pop().split(".")[0];
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
        archivosOrigen.splice(numAlAzar, 1);
        contador++;
            if(contador === 100){
            break;
        }
    }
}
}