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

exports.getActivity = async (req, res)=> {

    const { list_id, activity_id } = req.params;

    try {
        const activity = await Activity.findByPk(activity_id);
       
        if(activity.length == 0){
            return res.status(404).json({message: "Activity not found"});
        }
        
        if(activity.list_id != list_id){
            return res.status(400).json({message: "Activity does not belong to list"});
        }
        return res.status(200).json(activity);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createActivity = async (req, res)=>{
    let { list_id } = req.params;

    const activityData = {
        name: req.body.name,
        status: req.body.status,
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


exports.updateActivity = async (req, res)=>{
    let { list_id, activity_id } = req.params;

    const activityData = {
        name: req.body.name,
        status: req.body.status,
    }

    try {
        const list = await List.findByPk(list_id);
       
        if(! list){
            return res.status(404).json({error: 'List not found'});
        }

        const activity = await Activity.findByPk(activity_id);
       
        if(! activity){
            return res.status(404).json({error: 'Activity not found'});
        }
        if(activity.list_id != list_id){
            return res.status(400).json({error: 'Activity not belongs list'});
        }
        
        const activityUpdate = await Activity.update(activityData, {where: { id: activity_id }});

        if(! activityUpdate){
            return res.status(400).json({error: "Activity not updated"});
        }

        return res.status(200).json(activityUpdate);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.deleteActivity = async (req, res)=>{
    let { list_id, activity_id } = req.params;

    try {
        const list = await List.findByPk(list_id);
       
        if(! list){
            return res.status(404).json({error: 'List not found'});
        }

        const activity = await Activity.findByPk(activity_id);
       
        if(! activity){
            return res.status(404).json({error: 'Activity not found'});
        }
        if(activity.list_id != list_id){
            return res.status(400).json({error: 'Activity not belongs list'});
        }
        
        const activityDelete = await Activity.destroy({
            where: { 
                id: activity_id 
            }
        });

        if(! activityDelete){
            return res.status(400).json({error: "Activity not deleted"});
        }
        
        return res.status(200).json(activityDelete);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}
