'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController');

  // todoList Routes
  app.route('/stations')
    .get(todoList.list_all_station)
   
  app.route('/stations/:stationName')
    .get(todoList.read_a_station)
};