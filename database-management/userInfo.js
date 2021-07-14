const mongoose = require('mongoose');
require('dotenv').config()
const MongoUri = `mongodb+srv://m001-student:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.7exrb.mongodb.net/assignment?retryWrites=true&w=majority`;
mongoose.set('useCreateIndex', true);

try{
    mongoose.connect(MongoUri,{useNewUrlParser: true,useUnifiedTopology: true},(err,db)=>{
        if(err) {
            console.log(err);
        }
        else {
            console.log("Connected to db"+MongoUri);
            }
    })
}catch(err){
    console.log(err);
}
const Schema = mongoose.Schema;
const userCredentials = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true}
})

module.exports = mongoose.model('userCredentials',userCredentials);