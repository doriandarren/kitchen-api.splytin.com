import { response } from "express";
import { DishTypeRepository } from '../../../repositories/dish_types/dishTypeRepository.js';


const repository = new DishTypeRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishTypeUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('DishType list', data);

    } catch (error) {
        console.error('❌ Error en dishTypeListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
