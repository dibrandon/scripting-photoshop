var rutaOrigen = [];
var rutaDestino = [];
var rutaCopia = "D:/MASTER ADVANCED/A plus B";
var combinaciones = [];
var contador = 0;

//generamos los arreglos de origen y destino con 10000 elementos
for(var i=1; i<=1000; i++) {
var num = ("0000" + i).slice(-4);
var origenes = "C:/MASTER ADVANCED/A/" + num + "-A.psd";
var destinos = "C:/MASTER ADVANCED/B/" + num + "-B.psd";
rutaOrigen.push(origenes);
rutaDestino.push(destinos);
}

while(contador < 1000000) {
for (var i = 0; i < rutaDestino.length; i++) {
var numAlAzar = Math.floor(Math.random() * rutaOrigen.length);
while(numAlAzar === i){
numAlAzar = Math.floor(Math.random() * rutaOrigen.length);
}
var utilizado = false;
var combinacion = rutaOrigen[numAlAzar] + "-" + rutaDestino[i];

for (var j = 0; j < combinaciones.length; j++){
if(combinaciones[j] === combinacion){
utilizado = true;
break;
}
}

if(!utilizado){
        //Buscamos al azar y copiamos la capa activa.
        var docOrigen = app.open(File(rutaOrigen[numAlAzar]));
        docOrigen.activeLayer.copy();
        //
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
        // almacenamos las combinaciones ya realizadas
        combinaciones.push(combinacion);
        rutaOrigen.splice(numAlAzar, 1);
        contador++;
        if(contador === 1000000){
            break;
        }
    }
}
}
