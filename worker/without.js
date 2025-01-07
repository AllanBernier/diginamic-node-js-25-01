
setInterval(() => {
  console.log("Process running !")
}, 1000)



const LongCPUTask = () => {
  let i = 0

  while (i < 1000000000) {
    i++

    if ( i % 1000000000 === 0) {
      console.log("Running")
    }
  }
}

LongCPUTask()