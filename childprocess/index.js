const { spawn, exec } = require("child_process")

const commande = spawn("php", ["--version"])

commande.stdout.on("data", (data) => {
  console.log(data.toString())
})

commande.stderr.on("data", (data) => {
  console.log(data.toString())
})

commande.on("error", (err) => {
  console.log(err)
})


exec("php --version", (err, stdout, stderr) => {
  
  if(err) {
    console.log(err)
  }

  if(stdout) {
    console.log(stdout)
  }

  if(stderr) {
    console.log(stderr)
  }
})