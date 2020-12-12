const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,'A user must have a body'],
        
    },
    email : {
        type: String,
        required:[true, 'A user must have a mail id'],
        unique: true
    },
    password : {
        type:String, 
        required: true
    },
    register_date : { 
        type: Date, 
        default: Date.now()
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;