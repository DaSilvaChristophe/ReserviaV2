const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jsonwebtoken.verify(token, 'RANDOM_TOKEN');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Utilisateur non trouvé !';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Requête invalide !')
        });
    }
};