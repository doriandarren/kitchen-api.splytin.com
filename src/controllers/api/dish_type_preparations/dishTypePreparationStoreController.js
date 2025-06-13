import { response, request } from 'express';
import { DishTypePreparationRepository } from '../../../repositories/dish_type_preparations/dishTypePreparationRepository.js';


const repository = new DishTypePreparationRepository();

/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishTypePreparationStoreController = async(req, res = response) => {
    
    try {

        const data = await repository.store(dataNew);

        return res.handler.respondWithData(data, 'dishTypePreparation created');
        
    } catch (error) {
        console.error('❌ Error en userListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
