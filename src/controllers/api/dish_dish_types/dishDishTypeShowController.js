import { response } from "express";
import { DishDishTypeRepository } from "../../../repositories/dish_dish_types/dishDishTypeRepository.js";



const repository = new DishDishTypeRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishDishTypeShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishDishType show', data);

    } catch (error) {
        console.error('❌ Error en dishDishTypeListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
