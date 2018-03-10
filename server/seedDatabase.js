const userArgs = process.argv.slice(2);

if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

const async = require('async')
const User = require('./models/user')

const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;


mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

function createUser(first_name, last_name, usd, bitcoin, monero, litecoin, dogecoin) {
  userdetail = {first_name:first_name , last_name:last_name, usd:usd, bitcoin:bitcoin, monero:monero, litecoin:litecoin, dogecoin:dogecoin }

  var user = new User(userdetail);

  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
  }  );
}

function createUsers(cb) {
    async.parallel([
        function(callback) {
          createUser('Donald', 'Trump', 100000, 10000, 10000, 10000, 10000,  false, callback);
        },
        function(callback) {
          createUser('Ivanka', 'Trump', 10000, 0, 0, 0, 0, false, callback);
        },
        function(callback) {
          createUser('Jr', 'Trump', 10000, 0, 0, 0, 0, false, callback);
        },
        function(callback) {
          createUser('Barron', 'Trump', 10000, 0, 0, 0, 0, false, callback);
        },
        function(callback) {
          createUser('Eric', 'Trump', 10000, 0, 0, 0, 0, false, callback);
        },
        function(callback) {
          createUser('Tiffany', 'Trump', 10000, 0, 0, 0, 0, false, callback);
        }
      ],
      cb);
    }
async.series([
  createUsers
],

function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('hola');

    }
    mongoose.connection.close();
});
