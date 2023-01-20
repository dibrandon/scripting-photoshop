// Define un arreglo con las rutas de los archivos de origen y un arreglo con las rutas de los archivos de destino
var origenes = ["C:/MASTER ADVANCED/A/Nueva carpeta/0001-A.psd","C:/MASTER ADVANCED/A/Nueva carpeta/0002-A.psd","C:/MASTER ADVANCED/A/Nueva carpeta/0003-A.psd"];
var destinos = ["C:/MASTER ADVANCED/B/Nueva carpeta/0001-B.psd","C:/MASTER ADVANCED/B/Nueva carpeta/0002-B.psd","C:/MASTER ADVANCED/B/Nueva carpeta/0003-B.psd"];

// recorre cada archivo de origen
for (var i = 0; i < origenes.length; i++) {
    var docOrigen = app.open(File(origenes[i]));
    // selecciona la capa activa del archivo de origen
    docOrigen.activeLayer.copy();
    // selecciona el archivo de destino correspondiente
    var docDestino = app.open(File(destinos[i]));
    // selecciona la capa activa del archivo de destino
    // docDestino.activeLayer.select();
    // pega la capa copiada del archivo de origen sobre la capa activa del archivo de destino
    docDestino.paste();
    // guarda y cierra el archivo de destino
    docDestino.save();
    docDestino.close(SaveOptions.SAVECHANGES);
    // cierra el archivo de origen
    docOrigen.close(SaveOptions.DONOTSAVECHANGES);
} 

