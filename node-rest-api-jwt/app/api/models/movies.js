/**
 * Created by Roman on 11.07.2018.
 */
const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    released_on: {
        type: String,
        trim: true,
        required: true
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});
module.exports = mongoose.model('Movie', MovieSchema);