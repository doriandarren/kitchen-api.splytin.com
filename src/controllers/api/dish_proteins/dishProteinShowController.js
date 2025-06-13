import { response } from "express";
import { DishProteinRepository } from "../../../repositories/dish_proteins/dishProteinRepository.js";



const repository = new DishProteinRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishProteinShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishProtein show', data);

    } catch (error) {
        console.error('❌ Error en dishProteinListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
