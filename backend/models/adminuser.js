const {Schema, model} = require('../connection');
const adminuserSchema = new Schema({
    name: String,
    email: String,
    password : String,
    
});
module.exports = model('adminuser' , adminuserSchema);