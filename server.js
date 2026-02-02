const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./src/config/database');

const productRoutes = require('./src/routes/productRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor de Prueba Real corriendo en el puerto ${PORT}`);
});