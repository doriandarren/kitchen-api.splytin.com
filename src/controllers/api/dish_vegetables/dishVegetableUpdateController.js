import { response } from "express";
import { DishVegetableRepository } from '../../../repositories/dish_vegetables/dishVegetableRepository.js';


const repository = new DishVegetableRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishVegetableUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       vegetable_id,
        dish_id
    } = req.body;

    const dataToUpdate = {};

    if (vegetable_id !== undefined) dataToUpdate.vegetable_id = vegetable_id;
    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishVegetable list', data);

    } catch (error) {
        console.error('❌ Error en dishVegetableListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
