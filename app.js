const path = require('path');
var fetch = require('node-fetch');
const express = require('express');
var expbs = require('express-handlebars');
const app= express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on ${PORT}`))

app.set('view engine', 'ejs');

app.get('/:id' , async(req, res) => {
    try{
        ramData = await fetch(`https://rickandmortyapi.com/api/character/${req.params.id}`);

        const json = await ramData.json();

        // const {...results} = json.results;
        // console.log('results', results);
        console.log(json.url);
        res.render('index', {
            data: {
                name: json.name,
                image: json.image,
                status: json.status,
                species: json.species,
                gender: json.gender
            }
        })

    } catch(error){
        console.log(error);
    }
});