const List = require('../models/list.models');

exports.getAll = async (req, res, next)=> {

    try {
        const all = await List.findAll();

        return res.status(200).json(all);
    } catch (error) {
        return res.status(500).json(error);
    }
}

