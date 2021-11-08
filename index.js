const express = require("express");
const app = express();
const path = require("path"); 
const port = process.env.PORT || 3000;

let message = "";

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded( { extended: true } ));

// Creating JSON for Pokémon Info

const pokedex = [
    {
    number: "001",
    name: "Bulbasaur",
    type: "Grass",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.    ",
    height: "0.7m",
    weight: "6.9Kg",
    category: "Seed",
    skill: "Overgrow",
    },
    {
    number: "004",
    name: "Charmander",
    type: "Fire",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    height: "0.6m",
    weight: "8.5Kg",
    category: "Lizard",
    skill: "Blaze",
    },
    {
    number: "007",
    name: "Squirtle",
    type: "Water",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    height: "0.5m",
    weight: "9.0Kg",
    category: "Tiny Turtle",
    skill: "Torrent",
    }
];

// Initiating Routing

app.get("/", function (req, res) {
    setTimeout(() => {
        message = "";
      }, 1000);
    res.render("index.ejs", { pokedex: pokedex, message });
});

app.get("/cadastro", function (req, res) {
    res.render("cadastro.ejs", );
});

app.post("/receiveinfo", function (req, res) {
    const {poke_number, poke_name, poke_type, poke_photo, poke_description, poke_height, poke_weight, poke_category, poke_skill} = req.body;
    pokedex.push({
        number: poke_number, 
        name: poke_name, 
        type: poke_type, 
        photo: poke_photo, 
        description: poke_description, 
        height: poke_height, 
        weight: poke_weight, 
        category: poke_category, 
        skill: poke_skill});
        message = 'Congrats, your Pokemon was registered!'
    res.redirect("/");
});

app.get('/detalhes/:id', function (req, res) {
    const id = req.params.id;
    const poked = pokedex[id];
    res.render("detalhes", { poked });
});

app.listen(port, () => console.log(`server runing in http://localhost:${port}`));