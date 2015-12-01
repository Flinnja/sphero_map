require('dotenv').load()
var Cylon = require('cylon')

var spheroPort = process.env.SPHERO_ADDRESS
var awake

mapper = Cylon.robot({
  name: 'mapper',
  connections: {
    sphero: {adaptor: 'sphero', port: spheroPort}
  },
  devices: {
    sphero: {driver: 'sphero', connection: 'sphero'}
  },

  work: function(my){
    my.sphero.color('FFD700')
    my.sphero.setMotionTimeout(10000)

    every((1).second(), function(){
      my.sphero.roll(60, Math.floor(Math.random()*360))
    })

    my.sphero.on('error', function(err){
      console.log("Error with the mapper: ", error)
    })
  }
})

mapper.start()
