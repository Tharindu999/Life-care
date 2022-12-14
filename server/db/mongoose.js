var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://user:user@cluster0-shard-00-00.6sr4x.mongodb.net:27017,cluster0-shard-00-01.6sr4x.mongodb.net:27017,cluster0-shard-00-02.6sr4x.mongodb.net:27017/?ssl=true&replicaSet=atlas-f30zo5-shard-0&authSource=admin&retryWrites=true&w=majority");

module.exports = {mongoose};
