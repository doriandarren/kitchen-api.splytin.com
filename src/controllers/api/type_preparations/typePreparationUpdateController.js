import { response } from "express";
import { TypePreparationRepository } from '../../../repositories/type_preparations/typePreparationRepository.js';


const repository = new TypePreparationRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const typePreparationUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('TypePreparation list', data);

    } catch (error) {
        console.error('❌ Error en typePreparationListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
