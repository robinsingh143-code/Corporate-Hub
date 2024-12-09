const {Schema, model} = require('../connection');
const contactusSchema = new Schema({
    name: String,
    email: String,
    company : String,
    tel : Number,
    subject : String ,
    message : String,
});
module.exports = model('contactus' , contactusSchema);

