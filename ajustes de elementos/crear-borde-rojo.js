// Seleccionar la carpeta con los archivos PSD
var folderPath = "D:/PILAS ORIGIN - copia/PILAS ORIGIN MASTER/pequenos-psd";

// Obtener todos los archivos PSD en la carpeta
var fileList = folderPath.getFiles("*.psd");

// Iterar sobre cada archivo PSD
for (var i = 0; i < fileList.length; i++) {
  // Abrir el archivo PSD
  var doc = app.open(fileList[i]);

  // Seleccionar por gama de colores
  var iluminaciones = new SolidColor();
  iluminaciones.hsb.hue = 0; // Hueso 360º = rojo
  iluminaciones.hsb.saturation = 100; // Saturación máxima
  iluminaciones.hsb.brightness = 100; // Brillo máximo
  doc.selection.select(doc.colorRangeV2([iluminaciones], 0, 100));

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

  // Guardar cambios en un nuevo archivo PSD
  var saveFile = new File(folderPath + "/" + doc.name);
  doc.saveAs(saveFile);

  // Cerrar el archivo PSD
  doc.close(SaveOptions.DONOTSAVECHANGES);
}