import { response } from "express";
import { DishCarbohydrateRepository } from "../../../repositories/dish_carbohydrates/dishCarbohydrateRepository.js";



const repository = new DishCarbohydrateRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishCarbohydrateShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishCarbohydrate show', data);

    } catch (error) {
        console.error('❌ Error en dishCarbohydrateListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
