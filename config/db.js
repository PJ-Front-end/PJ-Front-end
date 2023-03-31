const mongoose= require('mongoose');
exports.connect = () =>{
    mongoose.connect('mongodb://100.25.143.129:8089/frontend',{
        dbName : "frontend"
    }) 
    .then(()=> console.log('Database is connected'))
    .catch((error)=> console.log(error))
}