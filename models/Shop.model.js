const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const shopSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name must not be empty'],
        unique :true,
        trim :true
    },
    owner :{
        type: String,
        required: [true, 'Name must not be empty'],
        trim :true
    },
    category :{
        type: String,
        required: [true, 'Name must not be empty'],
        trim :true
    }   
},
    {
        timestamps : true,
        versionKey : false
    }
    );

    module.exports.Shop = mongoose.model('ShopT', shopSchema);