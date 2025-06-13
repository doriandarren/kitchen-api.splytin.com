import { response, request } from 'express';
import { CarbohydrateRepository } from '../../../repositories/carbohydrates/carbohydrateRepository.js';


const repository = new CarbohydrateRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const carbohydrateListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Carbohydrate list', data);

    } catch (error) {
        console.error('❌ Error en carbohydrateListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
