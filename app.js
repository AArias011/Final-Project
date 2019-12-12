const path = require('path');
var fetch = require('node-fetch');
const express = require('express');
var expbs = require('express-handlebars');
const app= express();
// var expressLayouts = require('express-ejs-layouts');
// app.use(expressLayouts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on ${PORT}`))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/ram', async (req, res) => {

    try{
        ramData = await fetch(`https://rickandmortyapi.com/api/character/`);

        const json = await ramData.json();
        
        const [...characters] = json.results;
        
        // console.log(people);
        
        res.render('layout/index', {
            characters: characters
        })
    } catch(error){
        console.log(error);
    }

});

app.get('/ram/:id' , async(req, res) => {
    try{
        charData = await fetch(`https://rickandmortyapi.com/api/character/${req.params.id}`);

        const json = await charData.json();
        
        console.log(json);
        
        res.render('layout/all', {
            // characters: json.episode,
            data: {
                name: json.name,
                statues: json.status,
                species: json.species,
                gender: json.gender,
                image: json.image,
            }
        })
    } catch(error){
        console.log(error);
    }

});

