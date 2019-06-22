var cnvs = document.getElementById("c");
var ctx = cnvs.getContext("2d");
ctx.fillStyle = "#47998D"; //цвет заливки
var n = 20; //кол-во клеток по ширине и длине
var c_size = 500; //ширина и высота канваса
var arr = []; //игровое поле


createNet();

function drawField() {
	ctx.clearRect(0, 0, 500, 500); 
	for (var i=0; i< n; i++)
	{
		for (var j = 0; j < n; j++)
		{
			if (arr[i][j] == 1) {
				ctx.fillRect(j*25, i*25, 25, 25);
			}
		}
	}
}

function createNet() 
{
	var space = c_size/n; //расстояния между клетками
	for (x = space; x < c_size; x += space)
	{
		ctx.moveTo(x,0);
		ctx.lineTo(x,600);
	}
	for (y = space; y < c_size; y += space)
	{
		ctx.moveTo(0,y);
		ctx.lineTo(600,y);
	}

	ctx.strokeStyle = "grey";
	ctx.stroke();

}
cnvs.onclick = function(event) {
	// получаем координаты мыши
	var x = event.offsetX;
	var y = event.offsetY;
	console.log(x);
	console.log(y);
	x = Math.floor(x/25); //500/25 = 20(n)
	y = Math.floor(y/25); //500/25 = 20(n)
	arr[y][x] = 1; //заполнение игрового поля
	console.log(arr);
	drawField();

}

function createArr() {
	for (var i=0; i< n; i++)
	{
		arr[i] = [];
		for (var j = 0; j < n; j++)
		{
			arr[i][j] = 0;
		}
	}

}

createArr();


