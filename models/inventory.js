/*
Student Name - Vidhi Patel
Student ID - 301290703
Date - 21-10-2022
*/

let mongoose = require('mongoose');

//create a model class

let inventoryModel = mongoose.Schema(
    {
        name :{
            type : String,
            require : true
        },
        number : {
            type : Number,
            require : true
        },
        email : {
            type : String,
            require : true
        }  
    
    },
    {
        collection: "inventory" 
    }
);

module.exports = mongoose.model('inventory',inventoryModel);