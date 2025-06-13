import { response } from "express";
import { DishRepository } from '../../../repositories/dishes/dishRepository.js';


const repository = new DishRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const dishUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name,
        description
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;
    if (description !== undefined) dataToUpdate.description = description;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('Dish list', data);

    } catch (error) {
        console.error('❌ Error en dishListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
