var cnvs = document.getElementById("c");
var ctx = cnvs.getContext("2d");
var arr = []; //игровое поле

cnvs.onclick = function(event) {
	// получаем координаты мыши
	var x = event.offsetX;
	var y = event.offsetY;
	console.log(x);
	console.log(y);
}

function createArr() {
	var n = 30;
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