const {Schema, model} = require('../connection');
const hubpSchema = new Schema({
    title : String,
    description : String,
    imgurl : String
});
module.exports = model('hubp' , hubpSchema);