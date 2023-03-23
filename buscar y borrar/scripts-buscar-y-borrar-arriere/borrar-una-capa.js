// Define la carpeta de origen
var folderPath = "D:/PILAS ORIGIN - copia/PILAS ORIGIN MASTER/pequenos-psd";

// Crea un objeto para acceder al sistema de archivos
var files = Folder(folderPath).getFiles("*.psd");

// Recorre todos los archivos PSD en la carpeta
for (var i = 0; i < files.length; i++) {

  // Abre el archivo PSD
  var doc = app.open(files[i]);

  // Busca la capa "Arrière-plan"
  var bgLayer = doc.layers.getByName("Arrière-plan");

  // Si se encuentra la capa, elimínala y guarda los cambios
  if (bgLayer != null) {
    bgLayer.remove();
    doc.save();
  }

  // Si no encontro la capa, cierra el archivo sin guardar los cambios
  doc.close(SaveOptions.DONOTSAVECHANGES);
}