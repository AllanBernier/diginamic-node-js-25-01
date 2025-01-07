// Crée une classe personnalisée appelée MyEmitter qui hérite de EventEmitter.
// Ajoute une méthode appelée triggerEvent qui déclenche un événement customEvent.
// Écoute l'événement customEvent et affiche un message lorsqu'il est déclenché.
// Utilise la méthode triggerEvent pour déclencher l'événement.
const EventEmitter = require("events")

class MyEmitter extends EventEmitter {
  triggerEvent () {
    this.emit("customEvent")
  }
}

const myObject = new MyEmitter()
myObject.on("customEvent", () => console.log("event called "))
myObject.triggerEvent()