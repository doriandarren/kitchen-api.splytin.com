import { response, request } from 'express';
import { DishProteinRepository } from '../../../repositories/dish_proteins/dishProteinRepository.js';


const repository = new DishProteinRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishProteinListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishProtein list', data);

    } catch (error) {
        console.error('❌ Error en dishProteinListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
