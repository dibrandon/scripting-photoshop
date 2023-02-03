var folder = new Folder("C:/HDD R/PILAS ORIGIN MASTER ELE LAYER 2");
var fileList = folder.getFiles();

for (var i = 0; i < fileList.length; i++) {
  var file = fileList[i];
  if (file instanceof File && file.name.match(/\.(psd)$/i)) {
    app.open(file);
    var activeDocument = app.activeDocument;
    var layers = activeDocument.layers;

    var numberOfLayers = layers.length;

    for (var j = 0; j < numberOfLayers; j++) {
      layers[j].visible = true;
    }

    var transparentLayer = activeDocument.artLayers.add();
    transparentLayer.name = "Calque 1";
    transparentLayer.move(activeDocument, ElementPlacement.PLACEATBEGINNING);

    activeDocument.mergeVisibleLayers();
    activeDocument.save();
    activeDocument.close();
  }
}