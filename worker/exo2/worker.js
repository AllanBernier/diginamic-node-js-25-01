const { parentPort } = require("worker_threads")

parentPort.on("message", (nombre) => {
  parentPort.postMessage( nombre * 2 )
})