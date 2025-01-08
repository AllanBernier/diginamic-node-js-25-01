// Utilise spawn pour exécuter la commande node (démarrer une console Node.js en tant que processus enfant).
// Envoie une commande JavaScript simple comme console.log('Hello from child!') au processus enfant.
// Affiche la sortie du processus enfant dans le thread principal.
const { spawn } = require("child_process")

const node = spawn("node")
node.stdin.write("console.log('Hello from child')")

node.stdout.on("data", (data) => {
  console.log("result : " + data)
})

node.stdin.end()
