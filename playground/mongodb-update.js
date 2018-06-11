const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect Mongodb server');
    }
    console.log('connected to mongodb server.');

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectId("5b1eb675261aa3243e6a9bdd")
        }, {
            $set: {
                name: 'eliran hasin'

            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false

        }).then((result) => {
            console.log(result);
        })



    //db.close();

});