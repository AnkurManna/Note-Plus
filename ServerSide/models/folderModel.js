const mongoose = require('mongoose');
const FolderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A folder must have a name']
    },
    created_At:
    {
        type: Date, 
        default: Date.now()
    }
});

const Folder = mongoose.model('Folder',FolderSchema);
module.exports = Folder;