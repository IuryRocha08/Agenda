const express = require ('express');
const bodyParser = require ('body-parser');
// criar aplicativo expresso
const app = express ();
// Configurar porta do servidor
const port = process.env.PORT || 5000;
// analisa solicitações de content-type - application / x-www-form-urlencoded
app.use (bodyParser.urlencoded ({extended: true}))
// analisa solicitações de tipo de conteúdo - aplicativo / json
app.use (bodyParser.json ())
app.use(express.static('./public'));

// define uma rota raiz
app.get ('/', (req, res) => {
  res.send ("Olá, mundo");
});

// Exigir rotas de funcionários
const pessoasRotas = require ('./src/rotas/pessoas.rotas.js')
// usando como middleware
app.use ('/api/v1/pessoas', pessoasRotas)
// escuta os pedidos
app.listen (port, () => {
  console.log (`O servidor está escutando na porta $ {port}`);
});