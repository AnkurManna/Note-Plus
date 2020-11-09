const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    "name" : {
        type: String,
        required: [true,'A user must have a body'],
        
    },
    "mail" : {
        type: String,
        required:[true, 'A user must have a mail id'],
        unique : true
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;