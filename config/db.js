const mongoose= require('mongoose');
exports.connect = () =>{
    mongoose.connect('mongodb://52.203.78.54:8089/frontend',{
        dbName : "frontend"
    }) 
    .then(()=> console.log('Database is connected'))
    .catch((error)=> console.log(error))
}