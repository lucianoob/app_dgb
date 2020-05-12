
const mongoose = require('mongoose');
const configs = require('./libs/configs.js');
const utils = require('./libs/utils.js');

const connect = (log = true) => {
  mongoose.Promise = global.Promise;
  mongoose.connect(configs.mongo_server_url+configs.mongo_server_db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, function(err){
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
