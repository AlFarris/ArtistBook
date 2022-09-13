const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'This field is required'],
            minlength: [3, 'The name must be at least 3 characters']
        },
        specialty:{
            type: String,
            required: [true, 'This field is required'],
        },
        story:{
            type: String,
            required:[true, 'This field is required']
        },
        artLink: {
            type: String,
            required:[true, 'This field is required']
        },
},
        {timestamps: true});

const Art = mongoose.model('Art', ArtSchema);

module.exports = Art;