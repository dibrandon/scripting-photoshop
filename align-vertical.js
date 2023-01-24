var folder = new Folder("D:/MASTER ADVANCED/horizontal vertical");
var files = folder.getFiles();

for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (file instanceof File && file.name.match(/\.psd$/i)) {
        var doc = open(file);
        var layers = doc.layers;
        var numLayers = layers.length;

        for (var j = 0; j < numLayers; j++) {
            layers[j].selected = true;
        }
        doc.align("Align Vertical Centers", true);
        doc.save();
        doc.close();
    }
}