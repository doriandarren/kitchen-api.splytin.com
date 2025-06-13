import { response } from "express";
import { DishProteinRepository } from '../../../repositories/dish_proteins/dishProteinRepository.js';


const repository = new DishProteinRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishProteinUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       protein_id,
        dish_id
    } = req.body;

    const dataToUpdate = {};

    if (protein_id !== undefined) dataToUpdate.protein_id = protein_id;
    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishProtein list', data);

    } catch (error) {
        console.error('❌ Error en dishProteinListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
