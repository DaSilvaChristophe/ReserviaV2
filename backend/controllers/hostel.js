const Hostel = require('../models/hostel')

exports.getHostels = (req, res, next) => {
    Hostel.find()
    .then((hostels) => { res.status(200).json(hostels);
    })
    .catch((error) => { res.status(404).json({
        error
    });
    });
};

exports.getHostelOne = (req, res, next) => {
    Hostel.findOne({
        id: req.params.id
    })
    .then((hostel) => { res.status(200).json(hostel);
    })
    .catch((error) => { res.status(404).json({
        error
    });
    });
};

