import { response } from "express";
import { DishSeasonRepository } from "../../../repositories/dish_seasons/dishSeasonRepository.js";



const repository = new DishSeasonRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishSeasonShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('DishSeason show', data);

    } catch (error) {
        console.error('❌ Error en dishSeasonListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
