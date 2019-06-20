//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//Destructuring 
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


//Generate id with mongodb
const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect with database");
    }
    
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: "Mostafa",
    //     age: 27
    // })
})