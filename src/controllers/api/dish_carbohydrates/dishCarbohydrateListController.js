import { response, request } from 'express';
import { DishCarbohydrateRepository } from '../../../repositories/dish_carbohydrates/dishCarbohydrateRepository.js';


const repository = new DishCarbohydrateRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishCarbohydrateListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishCarbohydrate list', data);

    } catch (error) {
        console.error('❌ Error en dishCarbohydrateListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
