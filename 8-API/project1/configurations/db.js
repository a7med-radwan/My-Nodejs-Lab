const { MongoClient } = require('mongodb')

const _uri = "mongodb+srv://ahmed:ahmed409673787@cluster0.cl3vnlb.mongodb.net/nodejs_project?retryWrites=true&w=majority&appName=Cluster0"
const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            const db = client.db('nodejs_project').collection(collection);
            await cb(db)
            client.close();
        })
        .catch()
}


module.exports = dbConnection

// dbConnection('employees', async (db) =>{
//     const employees = await db.findOne();
//     console.log(employees)
// })
