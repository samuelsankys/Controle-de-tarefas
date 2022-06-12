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
