var socket = io()

io.on('collision', function(){
  var canvas = document.getElementById('map')
  if(canvas.getContext){
    var ctx = canvas.getContext('2d')
    ctx.fillStyle = "#DD3377"
    ctx.fillRect(50,50,2,2)
  }
})
