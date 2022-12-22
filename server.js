const express = require("express");
const app = express();

app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/imagens', express.static('./publico/imagens'));
app.use('/css', express.static('./publico/css'));

const PORTA = process.env.PORT || 8081;
app.listen(PORTA, function(){
console.log('Servidor rodando na Porta 8081');
});
app.get('/', function(req, res){
    //dirname localiza o o diretorio antes de agrotoxico
    res.sendFile(__dirname + '/inicio.html');
});
app.get('/historia', function(req, res){
    //dirname localiza o o diretorio antes de agrotoxico
    res.sendFile(__dirname + '/historia.html');
});

app.get('/tipos', function(req, res){
    //dirname localiza o o diretorio antes de agrotoxico
    res.sendFile(__dirname + '/tipos.html');
});
app.get('/desvantagens', function(req, res){
    //dirname localiza o o diretorio antes de agrotoxico
    res.sendFile(__dirname + '/desvantagens.html');
});

app.get('/impactos', function(req, res){
    //dirname localiza o o diretorio antes de agrotoxico
    res.sendFile(__dirname + '/impactos.html');
});

app.get('/quemSomos', function(req, res){
    //dirname localiza o o diretorio antes de agrotoxico
    res.sendFile(__dirname + '/quemSomos.html');
});
app.get('/bibliografia', function(req, res){
    //dirname localiza o o diretorio antes de agrotoxico
    res.sendFile(__dirname + '/bibliografia.html');
});

