const monoose = require('mongoose');

monoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser: true });
monoose.Promise = global.Promise;

module.exports = monoose;