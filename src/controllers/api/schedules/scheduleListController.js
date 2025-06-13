import { response, request } from 'express';
import { ScheduleRepository } from '../../../repositories/schedules/scheduleRepository.js';


const repository = new ScheduleRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const scheduleListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Schedule list', data);

    } catch (error) {
        console.error('❌ Error en scheduleListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
