import { response, request } from 'express';
import { SeasonRepository } from '../../../repositories/seasons/seasonRepository.js';


const repository = new SeasonRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const seasonListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Season list', data);

    } catch (error) {
        console.error('❌ Error en seasonListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
