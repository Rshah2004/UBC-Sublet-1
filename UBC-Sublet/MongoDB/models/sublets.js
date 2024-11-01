const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const subletsSchema = new Schema({
    user_id : {
        type: String
    }, 
    location: [{
        currentLocation: String,
        buildingNumber : String,
        latitude: Number,
        longitude: Number
    }],

    rooms: [String],

    //
    pricing: [{
        initialDeposit: Number,
        monthlyRent: Number
    }],
    numberOfRoomsAvailable : {
        type: String
    },
    //
    timePeriod : {
        type: Number
    },
    //
    contactInformation : [{
        name: String,
        email: String,
        phone: Number,
    }],
    description : {
        type: String
    },

    //
    amenities: [{
        furnished: Boolean,
        utilities: Boolean,
        utensile: Boolean,
        wifi: Boolean
    }],

    //
    dateAdding: {
        type: String,
    },

    //
    startingSubletDate: {
        type: String
    },
    endingSubletDate : {
        type: String
    },
    roomType : {
        type: String
    },
});
const Sublets = mongoose.model("sublets", subletsSchema);
module.exports = Sublets;