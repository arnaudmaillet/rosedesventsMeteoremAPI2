'user strict';
var sql = require('./db.js');

const coeff = "36/100";

// constructeur objet station
var Station = function(station){
    this.nom = nom.station;
    this.refStation = station.refStation;
    this.longitude = station.longitude;
    this.latitude = station.latitude;
    this.wind = station.wind;
    this.burst = station.burst;
    this.direction = station.direction;
    this.temperature = station.temperature;
    this.refTemp = station.refTemp;
};

//requetes
Station.getStationByName = function (stationName, result) {
        sql.query("select nom, station.reference as refStation, longitude, latitude, (left(station.valeur, 3)) * " + coeff + " as wind, (substring(station.valeur, 4,3)) * " + coeff + " as burst, substring(station.valeur, 7,3) as direction, temperature, temperature.reference as refTemp from station, temperature where station.id = temperature.idStation and nom = ? ", stationName, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Station.getAllStation = function (result) {
        sql.query("select nom, station.reference as refStation, longitude, latitude, (left(station.valeur, 3)) * " + coeff + " as wind, (substring(station.valeur, 4,3)) * " + coeff + " as burst, substring(station.valeur, 7,3) as direction, temperature, temperature.reference as refTemp from station, temperature where station.id = temperature.idStation", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('station : ', res);  

                 result(null, res);
                }
            });   
};

module.exports= Station;