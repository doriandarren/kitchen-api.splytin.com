import { response, request } from 'express';
import { DishVegetableRepository } from '../../../repositories/dish_vegetables/dishVegetableRepository.js';


const repository = new DishVegetableRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishVegetableListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishVegetable list', data);

    } catch (error) {
        console.error('❌ Error en dishVegetableListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
