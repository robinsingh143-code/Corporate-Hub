const {Schema, model} = require('../connection');
const hubvSchema = new Schema({
    title : String,
    description : String,
    imgurl : String
});
module.exports = model('hubv' , hubvSchema);