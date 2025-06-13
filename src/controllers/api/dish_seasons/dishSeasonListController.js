import { response, request } from 'express';
import { DishSeasonRepository } from '../../../repositories/dish_seasons/dishSeasonRepository.js';


const repository = new DishSeasonRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishSeasonListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('DishSeason list', data);

    } catch (error) {
        console.error('❌ Error en dishSeasonListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
