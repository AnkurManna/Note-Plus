const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const url = require('url');
const keys = require('./keys');

const DB_link = keys.DB_link

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
/*
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('ClientSide/books-app/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'ClientSide','build','index.html'));
    })
}*/