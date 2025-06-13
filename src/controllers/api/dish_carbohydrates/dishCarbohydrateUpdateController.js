import { response } from "express";
import { DishCarbohydrateRepository } from '../../../repositories/dish_carbohydrates/dishCarbohydrateRepository.js';


const repository = new DishCarbohydrateRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishCarbohydrateUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       carbohydrate_id,
        dish_id
    } = req.body;

    const dataToUpdate = {};

    if (carbohydrate_id !== undefined) dataToUpdate.carbohydrate_id = carbohydrate_id;
    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishCarbohydrate list', data);

    } catch (error) {
        console.error('❌ Error en dishCarbohydrateListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
