const { MongoClient } = require('mongodb');


const uri = process.env.MONGODB_URI;
//const uri = 'mongodb+srv://dilshanamarasinghe049:HD9oGQgTZtvHi4YG@cluster1.lqorvvt.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;