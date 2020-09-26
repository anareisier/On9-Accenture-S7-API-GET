const express =  require('express');
const app = express();
const porta = 3000;
const grlpwr = require('./grlpwr.json')

app.use(express.json());

//[GET]; http://localhost:3000/grlpwr
app.get('/grlpwr', function(req, res){
    res.json(grlpwr);
});

app.get('/grlpwr/:id', function(req, res){
    const id = parseInt(req.params.id);
    const encontrar = grlpwr.find(info => info.id == id);

    if(!encontrar) return res.status(204).json();

    res.json(encontrar);
});

app.listen(porta, function(){
    console.log("Servidor rodando")
})


/*
const express =  require('express');
const app = express();
const porta = 3000;
const users = require('./users.json')

app.use(express.json());

//[GET]; http://localhost:3000/users
app.get('/users', function(req, res){
    res.json(users);
})


app.listen(porta, function(){
    console.log("Servidor rodando")
})*/