const fs = require("fs")


fs.writeFile('./exemple.txt', 'Contenu du fichier modifié \n', 'utf8', (err) => {
  if (err) 
    return console.log("err :" + err)
  console.log("Done")
})

fs.appendFile('./exemple.txt', "Nouvelle ligne", "utf8", (err) => {
  if (err) 
    return console.log("err :" + err)
  console.log("Append")
})

fs.readFile('./exemple.txt', 'utf8', (err, data) => {
  if (err) 
    return console.log("err :" + err)
  console.log("Data :" + data)
} )