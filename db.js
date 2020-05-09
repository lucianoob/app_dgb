
const mongoose = require('mongoose');
const utils = require('./libs/utils.js');

const server = 'mongodb://localhost:27017/';
const mongodb = 'app_dgb';

const connect = (log = true) => {
  mongoose.Promise = global.Promise;
  mongoose.connect(server+mongodb, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, function(err){
    var admin = new mongoose.mongo.Admin(mongoose.connection.db);
    admin.buildInfo(function (err, info) {
      if(log) {
        utils.log('DB', 'initializing db...');
      }
      if(err) {
        if(log) {
          utils.log('DB Error:', err);
        }
      }
    });
  });
};

module.exports = connect;
