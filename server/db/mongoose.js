var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://hospitalsystem98:AjED1wLnd6yAGvRk@ac-evjenzz-shard-00-00.u2xnyes.mongodb.net:27017,ac-evjenzz-shard-00-01.u2xnyes.mongodb.net:27017,ac-evjenzz-shard-00-02.u2xnyes.mongodb.net:27017/?ssl=true&replicaSet=atlas-8pvjnf-shard-0&authSource=admin&retryWrites=true&w=majority");

module.exports = {mongoose};
