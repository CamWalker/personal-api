var user = require('../user.js')
var exports = module.exports = {}
var skills = require('../skills.js')
var secrets = require('../secrets.js')

exports.getUserName = function (req, res, next) {
  res.status(200).send({"name": user.name})
}

exports.putUserName = function (req, res, next) {
  user.name = req.body.name;
  res.status(200).send({"name": user.name})
}

exports.getLocation = function (req, res, next) {
  res.status(200).send({"location" : user.location})
}

exports.putUserLocation = function (req, res, next) {
  user.location = req.body.location;
  res.status(200).send({"location" : user.location})
}

exports.getOccupations = function (req, res, next) {
  var occupations = user.occupations
  switch (req.query.order) {
    case "asc":
      occupations = occupations.sort()
      break;
    case "desc":
      occupations = occupations.sort().reverse()
      break;
  }
  res.status(200).send({"occupations" : occupations})
}

exports.getLastOccupation = function (req, res, next) {
  res.status(200).send({"latestOccupation": user.occupations[user.occupations.length - 1]})
}

exports.postOccupations = function (req, res, next) {
  user.occupations.push(req.body.occupation)
  res.status(200).send({"hobbies": user.occupations})
}

exports.getHobbies = function (req, res, next) {
  res.status(200).send({"hobbies": user.hobbies})
}

exports.getHobbiesByType = function (req, res, next) {
  var hobbies = user.hobbies.filter(v => req.params.type === v.type)
  res.status(200).send({"hobbies": hobbies})
}

exports.postHobbies = function (req, res, next) {
  user.hobbies.push(req.body.hobby)
  res.status(200).send({"hobbies": user.hobbies})
}

exports.getFamily = function (req, res, next) {
  res.status(200).send({"family": user.family})
}

exports.getFamilyByGender = function (req, res, next) {
  var family = user.family.filter(v => req.params.gender === v.gender)
  res.status(200).send({"family": family})
}

exports.postFamily = function (req, res, next) {
  user.family.push(req.body.family)
  res.status(200).send({"family": user.family})
}

exports.getRestaurants = function (req, res, next) {
  res.status(200).send({"restaurants": user.restaurants})
}

exports.getRestaurantsByName = function (req, res, next) {
  var restaurant = user.restaurants.filter(v => req.params.name === v.name)
  res.status(200).send({"restaurants": restaurant})
}

exports.postRestaurants = function (req, res, next) {
  user.restaurants.push(req.body.restaurant)
  res.status(200).send({"restaurants": user.restaurants})
}

exports.getSkills = function (req, res, next) {
  var filteredSkills = skills
  if (req.query.experience) {
    filteredSkills = filteredSkills.filter(v => v.experience === req.query.experience)
  }
  res.status(200).send({"skills": filteredSkills})
}

exports.postSkills = function (req, res, next) {
  skills.push(req.body)
  res.status(200).send({"skills": skills})
}

exports.getSecrets = function (req, res, next) {
  res.status(200).send({"secrets": secrets.secrets})
}
