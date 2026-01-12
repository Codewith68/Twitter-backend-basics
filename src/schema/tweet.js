import mongoose from 'mongoose';


const tweetSchema = new mongoose.Schema({   
    body: {
        type: String,
        required: true,
        minlength: 1,   
        maxlength: 140,
        trim : true, // remove leading and trailing whitespace 
    },
});

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;