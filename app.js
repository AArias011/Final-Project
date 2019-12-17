const path = require('path');
var fetch = require('node-fetch');
const express = require('express');
const app= express();
// var expressLayouts = require('express-ejs-layouts');
// app.use(expressLayouts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on ${PORT}`))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/ram', async (req, res) => {

    try{
        ramData = await fetch(`https://rickandmortyapi.com/api/character/`);

        const json = await ramData.json();
        
        const [...characters] = json.results;
        
        // console.log(people);
        
        res.render('index', {
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
        
        res.render('all', {
            // characters: json.episode,
            data: {
                name: json.name,
                status: json.status,
                species: json.species,
                gender: json.gender,
                image: json.image,
            }
        })
    } catch(error){
        console.log(error);
    }

});


app.get('/BB', async( req, res) =>{
    try{
        people = await fetch(`https://www.breakingbadapi.com/api/characters`);

        const json = await people.json();



        const[...characters] = json;
        // console.log(json);
        res.render('breaking', {
            characters: characters
        })
    } catch(error){
        console.log(error);
    }
});



app.get('/HP', async(req,res) => {
    try{
        house = await fetch(`https://www.potterapi.com/v1/houses/?key=$2a$10$zGOa9Qs.7effh0BEheZYheZJkAvOYPS6VjRpp4EdqVw8fnthDCyme`);

        const json = await house.json();

        const[...houses] = json;

        res.render('harryPotter', {
            house: houses
        })
    } catch(error){
        console.log(error);
    }
})