import { response } from "express";
import { CarbohydrateRepository } from '../../../repositories/carbohydrates/carbohydrateRepository.js';


const repository = new CarbohydrateRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const carbohydrateUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('Carbohydrate list', data);

    } catch (error) {
        console.error('❌ Error en carbohydrateListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
