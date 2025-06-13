import { response } from "express";
import { DishScheduleRepository } from "../../../repositories/dish_schedules/dishScheduleRepository.js";



const repository = new DishScheduleRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishScheduleShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishSchedule show', data);

    } catch (error) {
        console.error('❌ Error en dishScheduleListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
