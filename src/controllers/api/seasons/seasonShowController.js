import { response } from "express";
import { SeasonRepository } from "../../../repositories/seasons/seasonRepository.js";



const repository = new SeasonRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const seasonShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('Season show', data);

    } catch (error) {
        console.error('❌ Error en seasonListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
