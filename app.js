const path = require('path');
var fetch = require('node-fetch');
const express = require('express');
var expbs = require('express-handlebars');
const app= express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on ${PORT}`))

app.set('view engine', 'ejs');

app.use('/:pokemonName', async (req, res) => {
    // :pokemonName ref to ${request.params.pokemonName}
    // see express documentation on req.params
    // req stands for the request, params is the parameters of the request
    // translation, what is your request to 
    try {
        res = await fetch(` https://rickandmortyapi.com/api/character`);
        const _json = await res.json();
        console.log(_json);
        
    } catch (error) {
        console.log(error);
    }
});
app.get('/home', (req,res) => {
   res.sendFile(__dirname + '/index.html')
})