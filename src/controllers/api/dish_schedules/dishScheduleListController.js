import { response, request } from 'express';
import { DishScheduleRepository } from '../../../repositories/dish_schedules/dishScheduleRepository.js';


const repository = new DishScheduleRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishScheduleListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishSchedule list', data);

    } catch (error) {
        console.error('❌ Error en dishScheduleListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
