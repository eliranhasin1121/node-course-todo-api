//const MongoClient=require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect Mongodb server');
    }
    console.log('connected to mongodb server.');

    db.collection('Users').find({name:'Eliran Hasin'}).toArray()
        .then((docs) => {
            //console.log(`Todos count:${count}`);
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        })



    db.close();

})