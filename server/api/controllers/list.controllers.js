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


exports.deleteList = async (req, res)=>{
    const { list_id } = req.params

    try {
        const list = await List.findByPk(list_id);
        
        if(! list){
            return res.status(400).json({error: 'List not found'});
        }

        const listDel = await List.destroy({where: {id: list_id}});

        if(! listDel){
            return res.status(400).json({error: 'Deleted list failed'});
        }

        return res.status(200).json({message: 'List deleted successfully'});
    } catch (error) {
        return res.status(500).json(error);
    }
}