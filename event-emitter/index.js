const EventEmitter = require("events")

const em = new EventEmitter()

em.on("my-event", () => {
  console.log("Event called !")
})


em.on("hello-name", (name) => {
  console.log("Hello " + name)
})


em.on("ping", () => {
  console.log("ping")
  em.emit("pong")
})


em.on("pong", () => {
  console.log("pong")
})


em.emit("ping")
em.emit("my-event")
em.emit("hello-name", "Lili")


class MaClass extends EventEmitter {
  constructor () {
    super();
    this.count = 0
  }

  increment() {
    this.count ++
    this.emit('increment', this.count)
  }

}

const monObject = new MaClass()

monObject.on('increment', (value) => {
  console.log("Current value :" + value)
})


monObject.increment()
monObject.increment()
monObject.increment()
monObject.increment()
