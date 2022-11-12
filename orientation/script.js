canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

var width = canvas.width
var height = canvas.height
alert(width)
alert(height)

window.addEventListener('orientationchange', orientationChange)
orientationChange(null)

function orientationChange(event) {
	// var angle = event.gamma
	var angle = 0

	alert(canvas.width)
	alert(canvas.height)

	ctx.fillStyle = 'red'
	ctx.fillRect(0, 0, width, height * ((angle - 90) / 200 + 1))
}