var express = require('express');
var router = express.Router();

// 1. import the model qui correspond a nos produits
let flightModel = require('../modele/flights.js')


router.get('/', function(req, res, next) {
  res.send('hello');
});

router.get('/ajoutdb', function(req, res, next) {
  res.render('form.ejs');
});

// 2. ajouter a la base de données les infos juste rentrées
router.post('/envoyer', async function(req, res, next) {
  await flightModel.create ({
    airline: req.body.airline,
    airport:req.body.airport,
    flightNo:req.body.flightNo,
    departs:req.body.departs,
  })
  //3. pour continuer à ajouter des données dans la database
  res.redirect('/flights/ajoutdb')
});


// 4. pour trouver les infos mis ds la db par le client
router.get('/flightsinfo', async function(req, res, next) {
  let results=await flightModel.find()
  console.log (results)
  res.render('flightsinfo.ejs', {
    results,
  })
});

//5. pour trouver une infodans la db par le client
router.get('/flightinfo/:id', async function(req, res, next) {
  console.log("reqparamid",req.params.id)
  let result=await flightModel.findOne({_id : req.params.id})
  console.log (result)
  res.render('detail.ejs', {
    result,
  })
});

module.exports = router;
