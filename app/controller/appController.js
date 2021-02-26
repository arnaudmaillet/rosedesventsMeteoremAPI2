'use strict';

var Station = require('../model/appModel.js');

// Autorise l'accès en local
const cros = function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*')
}

exports.list_all_station = function(req, res) {
    Station.getAllStation(function(err, station) {
    cros(req, res);
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', station);
    res.send(station);
  });
};


exports.read_a_station = function(req, res) {
    Station.getStationByName(req.params.stationName, function(err, station) {
    cros(req, res);
    if (err)
      res.send(err);
    res.json(station);
  });
};