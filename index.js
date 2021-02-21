const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db/mysql');
const routerUser = require('./routers/user');
const app = express();

connection
    .authenticate()
    .then(() => {
        console.log('Conexão bem sucedida!');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routerUser);

app.listen(3001, () => console.log('Conectado na porta 3001'));