import { response, request } from 'express';
import { DishCarbohydrateRepository } from '../../../repositories/dish_carbohydrates/dishCarbohydrateRepository.js';


const repository = new DishCarbohydrateRepository();

/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishCarbohydrateStoreController = async(req, res = response) => {
    
    try {

        const data = await repository.store(dataNew);

        return res.handler.respondWithData(data, 'dishCarbohydrate created');
        
    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
