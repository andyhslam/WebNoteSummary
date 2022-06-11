const EventEmitter = require("events")

class MyEventEmitter extends EventEmitter {}

const event = new MyEventEmitter()

event.on("play", (movie) => {
	console.log(movie)
})
event.once("play2", (movie) => {
	console.log(movie)
})

event.emit("play", "扬名立万")
event.emit("play2", "四海")
event.emit("play2", "飞龙再生")
