import { response } from "express";
import { DishTypePreparationRepository } from '../../../repositories/dish_type_preparations/dishTypePreparationRepository.js';


const repository = new DishTypePreparationRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishTypePreparationUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       dish_id,
        type_preparation_id
    } = req.body;

    const dataToUpdate = {};

    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;
    if (type_preparation_id !== undefined) dataToUpdate.type_preparation_id = type_preparation_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishTypePreparation list', data);

    } catch (error) {
        console.error('❌ Error en dishTypePreparationListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
