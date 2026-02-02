const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String,required: true },
    nombre: {type: String, required: true},
    apellido: { type: String, required: true },
    password: { type: String, required: true },
    dui: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);