import { response } from "express";
import { DishFatRepository } from "../../../repositories/dish_fats/dishFatRepository.js";



const repository = new DishFatRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishFatShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishFat show', data);

    } catch (error) {
        console.error('❌ Error en dishFatListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
