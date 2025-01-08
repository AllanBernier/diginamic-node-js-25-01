// Utilise exec pour exécuter la commande ls ou dir (selon ton système d'exploitation).
// Affiche les résultats ou les erreurs dans la console.
const { exec } = require("child_process")

exec(process.platform === "linux" ? "ls" : "dir", (err, out, stderr) => {
  if (err)
    console.log(err)

  if (out)
    console.log(out)

  if (stderr)
    console.log(stderr)
})