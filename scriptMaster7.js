var origenes = [];
for(var i=1; i<=3; i++) {
    var num = ("0000" + i).slice(-4);
    var ruta = "C:/MASTER ADVANCED/A/Nueva carpeta/" + num + "-A.psd";
    origenes.push(ruta);
}

var destinos = [];
for(var i=1; i<=3; i++) {
    var num = ("0000" + i).slice(-4);
    var ruta = "C:/MASTER ADVANCED/B/Nueva carpeta/" + num + "-B.psd";
    destinos.push(ruta);
}



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
