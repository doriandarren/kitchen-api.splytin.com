import { response } from "express";
import { SeasonRepository } from '../../../repositories/seasons/seasonRepository.js';


const repository = new SeasonRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const seasonUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('Season list', data);

    } catch (error) {
        console.error('❌ Error en seasonListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
