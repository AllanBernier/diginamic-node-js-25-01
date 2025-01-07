// Configure un worker thread qui écoute des messages du thread principal via parentPort.
// À chaque message reçu, le worker renvoie le double du nombre reçu.
// Dans le thread principal, envoie plusieurs nombres et affiche les réponses.
const { Worker } = require("worker_threads")

const worker = new Worker("./worker.js")

setInterval( () => {
  const send = Math.round(Math.random() *1000)
  console.log("Send : " + send)
  worker.postMessage( send )
}, 1000)

worker.on("message", (recieved) => {
  console.log("Recieved :" + recieved)
})