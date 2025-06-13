import { response } from "express";
import { ScheduleRepository } from '../../../repositories/schedules/scheduleRepository.js';


const repository = new ScheduleRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const scheduleUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('Schedule list', data);

    } catch (error) {
        console.error('❌ Error en scheduleListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
