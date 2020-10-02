const db = require('mongoose')

db.Promise = global.Promise

async function connect() {
    const uri = "mongodb+srv://ups:ups2020@cluster0.pwmqh.mongodb.net/utups?retryWrites=true&w=majority"
    await db.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'utups',
    })
        .then((data) => { console.log('[db] - Conectada con éxito.') })
        .catch((error) => {  console.error( '[error log] - ' + error ) })    
}

module.exports = connect