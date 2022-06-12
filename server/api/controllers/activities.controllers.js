const Activity = require('../models/activities.models');
const List = require('../models/list.models');


exports.getActivitiesList = async (req, res)=> {

    const { list_id } = req.params;

    try {
        const allActivities = await Activity.findAll( {
            where:{
                list_id: list_id,
            }
        });
       
        if(allActivities.length == 0){
            return res.status(404).json({message: "List not found activities"});
        }

        return res.status(200).json(allActivities);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createActivity = async (req, res)=>{
    let { list_id } = req.params;

    const activityData = {
        name: req.body.name,
        status: 'not completed',
        list_id
    }

    try {
        const list = await List.findByPk(list_id);
       
        if(! list){
            return res.status(404).json({error: 'List not found'});
        }
        
        const activity = await Activity.create(activityData);

        if(! activity){
            return res.status(400).json({error: "Activity not created"});
        }
        return res.status(200).json(activity);
    } catch (error) {
        return res.status(500).json(error);
    }
}
