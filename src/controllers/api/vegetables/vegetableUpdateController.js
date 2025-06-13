import { response } from "express";
import { VegetableRepository } from '../../../repositories/vegetables/vegetableRepository.js';


const repository = new VegetableRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const vegetableUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('Vegetable list', data);

    } catch (error) {
        console.error('❌ Error en vegetableListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
