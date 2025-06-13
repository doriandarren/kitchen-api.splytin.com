import { response, request } from 'express';
import { FatRepository } from '../../../repositories/fats/fatRepository.js';


const repository = new FatRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const fatListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Fat list', data);

    } catch (error) {
        console.error('❌ Error en fatListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
