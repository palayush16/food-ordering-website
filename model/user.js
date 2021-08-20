const mongoose = require('mongoose');

const User=new mongoose.Schema({ 
    resno:{
        type: Number,
        min:1,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    
    
});

module.exports=mongoose.model("user", User);