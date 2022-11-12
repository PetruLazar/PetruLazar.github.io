canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

window.addEventListener('orientationchange', orientationChange)

function orientationChange(event) {
	var angle = event.gamma

	ctx.beginPath()
	ctx.fillStyle('black')
	ctx.fillRect(0, 0, width, height * ((angle - 90) / 200 + 1))
}