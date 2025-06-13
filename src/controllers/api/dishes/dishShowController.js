import { response } from "express";
import { DishRepository } from "../../../repositories/dishes/dishRepository.js";



const repository = new DishRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('Dish show', data);

    } catch (error) {
        console.error('❌ Error en dishListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
