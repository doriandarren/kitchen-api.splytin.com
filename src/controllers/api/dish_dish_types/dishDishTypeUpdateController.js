import { response } from "express";
import { DishDishTypeRepository } from '../../../repositories/dish_dish_types/dishDishTypeRepository.js';


const repository = new DishDishTypeRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishDishTypeUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       dish_id,
        dish_type_id
    } = req.body;

    const dataToUpdate = {};

    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;
    if (dish_type_id !== undefined) dataToUpdate.dish_type_id = dish_type_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishDishType list', data);

    } catch (error) {
        console.error('❌ Error en dishDishTypeListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
