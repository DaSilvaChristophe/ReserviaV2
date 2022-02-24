const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur crée !'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => console.log(error))
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid) {
                        return res.status(401).json({error: 'Mot de passe incorrect !'})
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jsonwebtoken.sign(
                            {userId: user.id},
                            'RANDOM_TOKEN',
                            {expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
};

exports.getUserOne = (req, res, next) => {
    User.findOne({
        id: req.params.id
    })
    .then((user) => { res.status(200).json(user);
    })
    .catch((error) => { res.status(404).json({
        error
    });
    });
};

