
const mongoose = require ('mongoose');

var DoctorSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
	   required: true 
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
});

var Disease = mongoose.model('Doctor', DoctorSchema);



var scoreOfDisease = {}; // empty map

module.exports = {scoreOfDisease, Disease};
