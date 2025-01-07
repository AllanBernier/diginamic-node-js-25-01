const { Worker } = require("worker_threads")

setInterval(() => {
  console.log("Process running !")
}, 1000)

const useWorker = () => {
  const worker = new Worker("./worker.js")

  worker.on("message", (msg) => {
    console.log("Message : " + msg)
  })
}


useWorker()