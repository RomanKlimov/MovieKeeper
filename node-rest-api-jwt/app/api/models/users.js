/**
 * Created by Roman on 10.07.2018.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const saltRounds = bcrypt.genSaltSync(10);
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}]
});
// hash user password before saving into database
UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
module.exports = mongoose.model('User', UserSchema);