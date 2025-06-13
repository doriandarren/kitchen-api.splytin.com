import { response, request } from 'express';
import { DishTypePreparationRepository } from '../../../repositories/dish_type_preparations/dishTypePreparationRepository.js';


const repository = new DishTypePreparationRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishTypePreparationListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishTypePreparation list', data);

    } catch (error) {
        console.error('❌ Error en dishTypePreparationListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
