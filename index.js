var express = require('express')
var bodyParser = require('body-parser')
var middleware = require('./controllers/middleware.js')
var mainCtrl = require('./controllers/mainCtrl.js')
const port = 8080;

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.addHeaders)


app.get('/name', mainCtrl.getUserName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/latestOccupation', mainCtrl.getLastOccupation)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesByType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyByGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName)
app.get('/skills', mainCtrl.getSkills)

app.put('/name', mainCtrl.putUserName)
app.put('/location', mainCtrl.putUserLocation)

app.post('/hobbies', mainCtrl.postHobbies)
app.post('/occupations', mainCtrl.postOccupations)
app.post('/family', mainCtrl.postFamily)
app.post('/restaurants', mainCtrl.postRestaurants)
app.post('/skills', middleware.generateId, mainCtrl.postSkills)

app.get('/secrets/:username/:pin', middleware.verify, mainCtrl.getSecrets)

app.listen(port, function () {
  console.log('listening');
})
