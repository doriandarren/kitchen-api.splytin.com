import { response } from "express";
import { DishSeasonRepository } from '../../../repositories/dish_seasons/dishSeasonRepository.js';


const repository = new DishSeasonRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishSeasonUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       dish_id,
        season_id
    } = req.body;

    const dataToUpdate = {};

    if (dish_id !== undefined) dataToUpdate.dish_id = dish_id;
    if (season_id !== undefined) dataToUpdate.season_id = season_id;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishSeason list', data);

    } catch (error) {
        console.error('❌ Error en dishSeasonListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
