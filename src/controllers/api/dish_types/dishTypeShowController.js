import { response } from "express";
import { DishTypeRepository } from "../../../repositories/dish_types/dishTypeRepository.js";



const repository = new DishTypeRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishTypeShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishType show', data);

    } catch (error) {
        console.error('❌ Error en dishTypeListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
