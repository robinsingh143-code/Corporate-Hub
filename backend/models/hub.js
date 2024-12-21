const {Schema, model} = require('../connection');
const hubSchema = new Schema({
    title : String,
    description : String,
    imgurl : String
});
module.exports = model('hub' , hubSchema);