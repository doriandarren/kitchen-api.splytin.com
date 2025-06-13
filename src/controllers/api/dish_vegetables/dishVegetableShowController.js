import { response } from "express";
import { DishVegetableRepository } from "../../../repositories/dish_vegetables/dishVegetableRepository.js";



const repository = new DishVegetableRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishVegetableShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishVegetable show', data);

    } catch (error) {
        console.error('❌ Error en dishVegetableListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
