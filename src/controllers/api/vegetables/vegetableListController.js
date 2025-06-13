import { response, request } from 'express';
import { VegetableRepository } from '../../../repositories/vegetables/vegetableRepository.js';


const repository = new VegetableRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const vegetableListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Vegetable list', data);

    } catch (error) {
        console.error('❌ Error en vegetableListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
