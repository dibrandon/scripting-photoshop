var origenes = [];

for(var i=1; i<=10; i++) {
    var num = ("0000" + i).slice(-4);
    var ruta = "C:/MASTER ADVANCED/A/Nueva carpeta/" + num + "-A.psd";
    origenes.push(ruta);
}

var destinos = [];

for(var i=1; i<=10; i++) {
    var num = ("0000" + i).slice(-4);
    var ruta = "C:/MASTER ADVANCED/B/Nueva carpeta/" + num + "-B.psd";
    destinos.push(ruta);
}

for (var i = 0; i < origenes.length; i++) {
    var docOrigen = app.open(File(origenes[i]));
    docOrigen.activeLayer.copy();
    var docDestino = app.open(File(destinos[i]));
    docDestino.paste();
    docDestino.save();
    docDestino.close(SaveOptions.SAVECHANGES);
    docOrigen.close(SaveOptions.DONOTSAVECHANGES);
} 

