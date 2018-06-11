//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
    return  console.log('Unable to connect Mongodb server');
    }
    console.log('connected to mongodb server.');
  
    // db.collection('Todos').deleteOne({text:'Eat lunch'})
    // .then((res)=>{
    //     console.log(res);
    // })
  db.collection('Todos').findOneAndDelete({completed:false})
  .then((res)=>{
      console.log(res);
  })
    db.close();
    
})
//deletMany
//deleteOne
//findOneAndDelete