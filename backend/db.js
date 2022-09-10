const mongoose = require("mongoose")
const db_name = "DB_NAME"
const mongoose_url = "DB_URL"
const connectToMongoose = () =>{
    mongoose.connect(mongoose_url , () =>{
        console.log("Connected to the Data Base 👌")
    })
}
module.exports =  connectToMongoose
