const {Schema, model} = require('../connection');
const registerSchema = new Schema({

    title : String,
    firstname: String,
    secondname: String,
    position : String ,
    company : String,
    business : String,
    employees : String,
    street : String,
    additionalinformation : String,
    zipcode : String,
    place : String,
    country : String,
    tel : Number,
    email: String,
    
    
    
});
module.exports = model('register' , registerSchema);