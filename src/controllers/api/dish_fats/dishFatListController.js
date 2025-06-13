import { response, request } from 'express';
import { DishFatRepository } from '../../../repositories/dish_fats/dishFatRepository.js';


const repository = new DishFatRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishFatListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishFat list', data);

    } catch (error) {
        console.error('❌ Error en dishFatListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
