//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
    return  console.log('Unable to connect Mongodb server');
    }
    console.log('connected to mongodb server.');
    // db.collection('Users').insertOne({
    //     _id:1,
    //     name:'Eliran Hasin',
    //     age:26,
    //     location:'Israel'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable insert todo',err);
    //     }
    //     //console.log(result._id.getTimestamp());
    //             console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.close();

})