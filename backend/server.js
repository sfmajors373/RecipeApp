const express = require('express');
const bodyParser = require('body-parser');
const Recipe = require('./model');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cors = require('cors');

const corsOptions = {
  "origin": "http://localhost:3000",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204,
  "credentials": true,
};


const server = express();
server.use(bodyParser.json());
server.use(cors(corsOptions));

server.get('/recipes', (req, res) => {
  Recipe.find({}, (err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipe);
    }
  });
});

server.get('/recipe/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .exec((err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipe);
    }
  });
});

server.get('/recipes/:ingredient', (req, res) => {
  const { ingredient }  = req.params;
  Recipe.find({ ingredients: { $in: [{ ingredient }] }})
    .exec((error, answer) => {
       if (!ingredient ) {
         res.status = 422;
         res.send('ingredient required');
         return;
       }
      res.json(answer);
    });
});

// server.post('/newrecipe', (req, res) => {
//   const { name, ingredients, steps } = req.body;
//   if (!name || !ingredients) {
//     res.status(422);
//     res.send({ error: "please include name and ingredients" });
//   } else {
//     const recipe = new Recipe(req.body);
//     recipe.save((err, newRecipe) => {
//       if (err) {
//         res.send(err);
//         return;
//       }
//       res.send(newRecipe);
//     });
//   }
// });

module.exports = server;

