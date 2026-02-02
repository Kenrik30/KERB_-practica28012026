const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).json({ error: 'Token requerido' });

    try {
        const decoded = jwt.verify(token.split(" ")[1], 'secreto_super_seguro');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = verifyToken;