import { response } from "express";
import { DishTypePreparationRepository } from "../../../repositories/dish_type_preparations/dishTypePreparationRepository.js";



const repository = new DishTypePreparationRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishTypePreparationShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishTypePreparation show', data);

    } catch (error) {
        console.error('❌ Error en dishTypePreparationListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
