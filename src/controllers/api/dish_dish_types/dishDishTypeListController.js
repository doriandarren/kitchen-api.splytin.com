import { response, request } from 'express';
import { DishDishTypeRepository } from '../../../repositories/dish_dish_types/dishDishTypeRepository.js';


const repository = new DishDishTypeRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishDishTypeListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishDishType list', data);

    } catch (error) {
        console.error('❌ Error en dishDishTypeListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
