// Define la ruta del archivo de origen y un arreglo con las rutas de los archivos de destino
var origen = new File("C:/MASTER ADVANCED/A/Nueva carpeta/0001-A.psd");
var destinos = ["C:/MASTER ADVANCED/B/Nueva carpeta/0001-B.psd","C:/MASTER ADVANCED/B/Nueva carpeta/0002-B.psd","C:/MASTER ADVANCED/B/Nueva carpeta/0003-B.psd"];

// abre el archivo de origen
var docOrigen = app.open(origen);

// recorre cada archivo de destino
for (var i = 0; i < destinos.length; i++) {
    // selecciona la capa activa del archivo de origen
    docOrigen.activeLayer.copy();
       // selecciona la capa activa del archivo de destino
    var docDestino = app.open(File(destinos[i]));
   // docDestino.activeLayer.select();
    // pega la capa copiada del archivo de origen sobre la capa activa del archivo de destino
    docDestino.paste();
    // guarda y cierra el archivo de destino
    docDestino.save();
    docDestino.close(SaveOptions.SAVECHANGES);
}
// cierra el archivo de origen
docOrigen.close(SaveOptions.DONOTSAVECHANGES);
