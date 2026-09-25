const express = require(`express`);// Express é o framework que permite com que escrevamos o codigo mais simplicado (aqui a gente cria)
const app = express();//o app é o server de fato (chama a função express) (aqui a gente usa)
app.use(express.json()); //chamando usabilidade json de dentro do app (que é a função express);

const produtosRoutes = require(`./routes/produtosRoutes`);
const clientesRoutes = require(`./routes/clientesRoutes`);
app.use(produtosRoutes);
app.use(clientesRoutes);

module.exports = app;