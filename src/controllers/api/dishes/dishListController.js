import { response, request } from 'express';
import { DishRepository } from '../../../repositories/dishes/dishRepository.js';


const repository = new DishRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Dish list', data);

    } catch (error) {
        console.error('❌ Error en dishListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
