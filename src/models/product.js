const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    codigo: { type: String,required: true },
    marca: {type: String, required: false },
    nombre: { type: String, required: true },
    descripcion : {type: String, required :false },
});

module.exports = mongoose.model('Product', userSchema)