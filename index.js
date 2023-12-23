const express = require("express")
const app = express();
const port = process.eventNames.PORT || 3000

app.use(express.json())

app.get('/', (req,res) =>{
  res.send("Bem vindo a minha API")
})

app.listen(port, () =>{
  console.log(`Servidor está rodando na porta ${port}`)
})


// mostra a lista de items
app.get('/api/items', (req, res) =>{
  res.json({items: ["Item 1", "Item 2", "Item 3"]})
})

// Adiciona para a lista de items
app.post("/apit/items", (req, res) =>{
  const novoItem = req.body.item
  req.json({message: "Item adicionado com sucesso", item: novoItem})
})