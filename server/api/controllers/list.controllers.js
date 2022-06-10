const List = require('../models/list.models');

exports.getAll = async (req, res, next)=> {

    try {
        const all = await List.findAll();

        return res.status(200).json(all);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createList = async (req, res)=>{
    try {
        const list_data = {
            name: req.body.name,
            status: 'not completed',
        }
        const list = await List.create(list_data);

        if(! list){
            return res.status(400).json({error: "list not created"});
        }
        return res.status(200).json(list);
    } catch (error) {
        return res.status(500).json(error);
    }
}

