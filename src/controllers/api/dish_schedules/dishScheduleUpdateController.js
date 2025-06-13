import { response } from "express";
import { DishScheduleRepository } from '../../../repositories/dish_schedules/dishScheduleRepository.js';


const repository = new DishScheduleRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishScheduleUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       dish_id,
        schedule_id
    } = req.body;

    const dataToUpdate = {};

    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;
    if (schedule_id !== undefined) dataToUpdate.schedule_id = schedule_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishSchedule list', data);

    } catch (error) {
        console.error('❌ Error en dishScheduleListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
