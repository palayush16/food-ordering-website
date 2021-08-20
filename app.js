const express = require('express');
const mongoose= require('mongoose');

const User=require("./model/user")

require("dotenv/config")
const app = express();

app.use(express.json());


if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"), err => {
            if (err) {
                res.status(500).send(err);
            }
        });
    });
    
}


app.get('/items3', (req, res) => {

    User.find({resno:3})
    .then(result=>{
        let resultr = result.map(a => a.name);
        res.status(200).json({resultr});
    }) 
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    
});
app.get('/items2', (req, res) => {

    User.find({resno:3})
    .then(result=>{
        let resultr = result.map(a => a.name);
        res.status(200).json({resultr});
    }) 
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    
});
app.get('/items1', (req, res) => {

    User.find({resno:1})
    .then(result=>{
        let resultr = result.map(a => a.name);
        res.status(200).json({resultr});
    }) 
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    
});

app.post("/create_items", async (req, res) => {
    try{
        const myuser=new User(req.body);
        await myuser.save();
        res.send(myuser);
    }
    catch(err){
        res.send({message: err.message});
    }
    
});

// mongoose.connect(
//     process.env.DB_CONNECTION_STRING,
//     { useUnifiedTopology: true, useNewUrlParser: true },
//     (req, res)=>{
//     console.log("Connected to database");
// }
// ); 
mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const PORT =process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`);
    
});