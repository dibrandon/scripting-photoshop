// Definimos la carpeta que contiene los archivos PSD a procesar
var folderPath = "D:/PILAS ORIGIN - copia/PILAS ORIGIN MASTER/pequenos-psd";

// Accedemos a la carpeta y obtenemos la lista de archivos PSD
var folder = Folder(folderPath);
var fileList = folder.getFiles("*.psd");

// Iteramos por cada archivo en la lista
for (var i = 0; i < fileList.length; i++) {
  // Abrimos el archivo PSD y activamos su ventana
  var file = fileList[i];
  var doc = app.open(file);
  doc.activeLayer = doc.layers[0];

  // Definimos la selección hasta todo
  doc.selection.selectAll();

  // Copiamos la capa actual y la pegamos
  doc.activeLayer.copy();
  doc.paste();

  // Seleccionamos la capa "Calque 1" y eliminamos la capa actual
  doc.activeLayer = doc.layers.getByName("Calque 1");
  doc.activeLayer.remove();

  // Movemos la capa actual a la posición indicada
  doc.activeLayer.translate(-168, 225);

  // Seleccionar por gama de colores
  var iluminaciones = new SolidColor();
  iluminaciones.hsb.hue = 0; // Hueso 360º = rojo
  iluminaciones.hsb.saturation = 100; // Saturación máxima
  iluminaciones.hsb.brightness = 100; // Brillo máximo
  doc.selection.select(doc.colorRange([iluminaciones], 0));

  // Agregar borde
  var borde = 7; // 7 pixeles de ancho
  doc.selection.stroke(new SolidColor(), borde);

  // Agregar contorno
  var contorno = 7; // 7 pixeles de ancho
  var colorContorno = new SolidColor();
  colorContorno.hsb.hue = 360; // Hueso 360º = rojo
  colorContorno.hsb.saturation = 100; // Saturación máxima
  colorContorno.hsb.brightness = 100; // Brillo máximo
  doc.selection.stroke(colorContorno, contorno, StrokeLocation.CENTER, ColorBlendMode.NORMAL, 100);

  // Guardamos los cambios en un archivo nuevo en una ruta diferente
  var savePath = "D:/PILAS ORIGIN - copia/PILAS ORIGIN MASTER/pequenos-borde-rojo-posicion-2";
  var saveFile = new File(savePath + "/" + file.name);
  doc.saveAs(saveFile);

  // Cerramos el archivo procesado sin guardar los cambios
  doc.close(SaveOptions.DONOTSAVECHANGES);
}