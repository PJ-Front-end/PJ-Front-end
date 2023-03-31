const mongoose= require('mongoose');
exports.connect = () =>{
    mongoose.connect('mongodb://54.144.46.240:8089/frontend',{
        dbName : "frontend"
    }) 
    .then(()=> console.log('Database is connected'))
    .catch((error)=> console.log(error))
}