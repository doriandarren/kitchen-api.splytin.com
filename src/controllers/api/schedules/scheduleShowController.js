import { response } from "express";
import { ScheduleRepository } from "../../../repositories/schedules/scheduleRepository.js";



const repository = new ScheduleRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const scheduleShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('Schedule show', data);

    } catch (error) {
        console.error('❌ Error en scheduleListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
