const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const url = require('url');


const DB_link ="mongodb://Ankur:Ankur@cluster0-shard-00-00.ocjs2.mongodb.net:27017,cluster0-shard-00-01.ocjs2.mongodb.net:27017,cluster0-shard-00-02.ocjs2.mongodb.net:27017/test?ssl=true&replicaSet=atlas-wnnthy-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(DB_link,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true 
}).then(con => {
    console.log("Yeah connected!!");
})


const port =4000;


app.listen(port,()=>{
    console.log(`Listening port ${port}`);
    console.log("hi");
})
