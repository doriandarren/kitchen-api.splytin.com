import { response } from "express";
import { DishFatRepository } from '../../../repositories/dish_fats/dishFatRepository.js';


const repository = new DishFatRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishFatUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       fat_id,
        dish_id
    } = req.body;

    const dataToUpdate = {};

    if (fat_id !== undefined) dataToUpdate.fat_id = fat_id;
    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishFat list', data);

    } catch (error) {
        console.error('❌ Error en dishFatListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
