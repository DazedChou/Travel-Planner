const Location = require('./Location');
const Traveller = require('./Location');
const Trips = require('./Trips');


Traveller.belongsToMany(Location, {
    through: {model: Trips , unique: false} ,
    as: 'Travelerslocation',
});
Location.belongsToMany(Traveller, {
    through: {model: Trips, unique: false} ,
    as: 'LocationsTraveler',
});