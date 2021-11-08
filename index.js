const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

app.set("view engine", "ejs")  //set engine para trabalhar com o EJS

app.use(express.static(path.join(__dirname, "public"))); // Set public como pasta raiz de arquivos estaticos como IMG e CSS

// Substituição de function por arrow function
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/teste", function (req, res){
  res.send("essa é uma mensagem de teste")
})

app.get("/index", function (req, res){
  res.send("index")
})
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));