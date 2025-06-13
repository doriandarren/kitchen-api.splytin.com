import { response, request } from 'express';
import { DishTypeRepository } from '../../../repositories/dish_types/dishTypeRepository.js';


const repository = new DishTypeRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishTypeListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishType list', data);

    } catch (error) {
        console.error('❌ Error en dishTypeListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
