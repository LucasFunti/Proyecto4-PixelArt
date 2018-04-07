var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var $paleta_colores = $('#paleta');
var $grilla_pixeles = $('#grilla-pixeles');
var $indicador_color = $('#indicador-de-color');
var mouseApretado = false;

function obtenerColor(){
  return $indicador_color.attr('background-color');
}

function generarGrilla(){
  for(var i = 0; i<1749; i++){
    $grilla_pixeles.append($("<div>",{'class':'pixel','transition': 'width 3000 ease-in 3000'}));
  }
}
function cambioDeColorBackground(objeto,color){
  objeto.attr({'background-color': color});
  objeto.css({'background-color': color});
}
function generarPaleta(){
  $(nombreColores).each(function(){
    var $color = $('<div>',{'class':'color-paleta'});
    cambioDeColorBackground($color,this);
    $paleta_colores.append($color);
  });
}

$paleta_colores.click(function(){
  var color = $(event.target).attr('background-color');
  cambioDeColorBackground($indicador_color,color);
});


$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  cambioDeColorBackground($indicador_color,colorActual);
});

$grilla_pixeles.click(function(){
    var color = obtenerColor();
    pintar(event.target,color);
});

function pintar(pixel,color){
  cambioDeColorBackground($(pixel),color);
}

$grilla_pixeles.mousemove( function () {
  if(mouseApretado){
     var color = obtenerColor();
     pintar(event.target,color);
  }
});

$grilla_pixeles.mousedown(function(){
  mouseApretado = true;
});

$grilla_pixeles.mouseup(function(){
  mouseApretado = false;
});

$('#borrar').click(function(){
    $(".pixel").each(function(){
      $(this).animate({"style":"background-color: White"},3000);
      $(this).attr({"background-color" : "White"});
    });
    $grilla_pixeles.attr({"background-color":"White"});
});

$('#guardar').click(function(){
  guardarPixelArt();
});

$('.imgs').click(function(){
  var superheroe;
  switch (event.target.id) {
    case "batman":
      superheroe = batman;
      break;
    case "wonder":
      superheroe = wonder;
      break;
    case "flash":
      superheroe = flash;
      break;
    case "invisible":
      superheroe = invisible;
      break;
  }
  cargarSuperheroe(superheroe);
});

$(document).ready(function(){
  generarGrilla();
  generarPaleta();
});
