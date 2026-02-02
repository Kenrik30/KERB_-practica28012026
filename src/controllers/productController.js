const product = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        const newProduct = new product (req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const { nrc, nombre } = req.query;
        let busqueda = {};
    if (nrc) {
        busqueda.nrc = { $regex: nrc, $options: 'i' };
    }
    if (nombre) {
            busqueda.nombre = { $regex: nombre, $options: 'i' };
    }
    const products = await product.find(busqueda);
    res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener producto' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updateProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
};