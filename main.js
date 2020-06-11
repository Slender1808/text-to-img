
var str
var imgSize
function draw() {
  // Pega elemento canvas
  var Canvas = document.getElementById("canvas");

  // Seta tamanho do pixel
  PixelSize = 1;

  // Raiz quadrada para adquirir um canvas power of two
  var CanvasSize = Math.ceil(Math.sqrt(mensHex.length / 3));

  // Arredonda para cima e multiplica pelo tamanho do pixel
  var CanvasSize_Multiplier = CanvasSize * PixelSize;

  // Seta canvas size
  Canvas.height = CanvasSize_Multiplier;
  Canvas.width = CanvasSize_Multiplier;
  imgSize = CanvasSize_Multiplier

  // Checa se contexto existe
  if (Canvas.getContext) {
    // Pega contexto pra desenho
    var Context = Canvas.getContext("2d");

    // Desenha o canvas inteiro para melhor visualização da imagem power of two.
    Context.fillStyle = 'white';
    Context.fillRect(0, 0, Canvas.width, Canvas.height);

    // Precorre array de hex.
    for (var i = 0; i < mensHex.length;i++) {
      var r = mensHex[i + 1] == undefined ? 0 : mensHex[i + 1]
      var g = mensHex[i + 2] == undefined ? 0 : mensHex[i + 2]
      var b = mensHex[i + 3] == undefined ? 0 : mensHex[i + 3]
      var cor = `rgb(${r},${g},${b})`
      Context.fillStyle = cor
      console.log(cor)
      var yPosition = Math.floor(i/ CanvasSize) * PixelSize;
      var xPosition = i % CanvasSize * PixelSize;
      Context.fillRect(xPosition, yPosition, PixelSize, PixelSize)
    }

    /*mensHex.forEach(function (Item, Index, Arr) {
      // Registra posição y, dividindo a index pelo canvas size.
      var yPosition = Math.floor(Index / CanvasSize) * PixelSize;
      // Faz o modulo para encontrar posicao x.
      var xPosition = Index % CanvasSize * PixelSize;

      // Seta cor do retangulo com base no item do array

      Context.fillStyle = `rgb(${Item},${Item},${Item})`
      console.log(`rgb(${Item},${Item},${Item})`)

			/*	Preenche um retangulo no canvas
			*	Posição é dado pela multiplicação de x com o tamanho do pixel, assim como a posição em y.
			*	Tamanho do pixel é dado pela variável definida anteriormente.
			*/
    /*Context.fillRect(xPosition, yPosition, PixelSize, PixelSize)
  });
*/
    var imgData = Context.getImageData(0, 0, CanvasSize_Multiplier, CanvasSize_Multiplier)
    console.log('imgData')
    console.log(imgData)

    var canvas = document.getElementById('canvas');
    var webp = canvas.toDataURL('image/webp', 0)
    console.log(webp)

    var imgProduto = document.createElement("IMG");
    imgProduto.setAttribute("src", webp);
    imgProduto.setAttribute("type", "image/webp");
    imgProduto.id = 'teste';
    document.body.appendChild(imgProduto); //Adiciona a imagem a div quem tem codigo do protudo

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("teste");
    ctx.drawImage(img, 0, 0);
    var imgDataCom = ctx.getImageData(0, 0, 2, 2)
    console.log('imgDataCom')
    console.log(imgDataCom)

    //teste()
  }

}

var mensDec = []
var mensHex = []
function myFunction() {
  str = document.getElementById("mens").value
  for (var i = 0; i < str.length; i++) {
    mensDec[i] = str.charCodeAt(i)
    mensHex[i] = mensDec[i]//.toString(16)
  }
  draw()
}
/*
function teste() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("teste");
  ctx.drawImage(img, 0, 0);
  var imgData = ctx.getImageData(0, 0, imgSize, imgSize);
  console.log(imgData) 
}*/


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) { // função não é usada
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Converter hex to decimal 
// ex #007744 => 74 => 116 => t

var a = parseInt("74", 16)