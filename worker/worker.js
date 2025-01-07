const { parentPort } = require("worker_threads")

const LongCPUTask = () => {
  let i = 0

  while (i < 1000000000000000000) {
    i++

    if ( i % 1_000_000_000 === 0) {
      parentPort.postMessage(i)
    }
  }
}

LongCPUTask()