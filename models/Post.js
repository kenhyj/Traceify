const mongoose = require ('mongoose');

const PostSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20,
    }, 
    tweet: {
        type:String,
        required: true,
        trim: true,
        minLength: 1
    },
    date: {
        type: String,
        required: false,
        trim: true,
    }
})

module.exports = mongoose.model('Post', PostSchema);