// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,   //post id ko store kr rha hoga
        ref : "Post" //reference to the post model
    },
    user: {
        type:String,
        required:true,
    },    
    body: {
        type:String,
        required:true,
    }    
})


// Export 
module.exports = mongoose.model("Comment",commentSchema)