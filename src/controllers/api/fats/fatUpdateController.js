import { response } from "express";
import { FatRepository } from '../../../repositories/fats/fatRepository.js';


const repository = new FatRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const fatUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('Fat list', data);

    } catch (error) {
        console.error('❌ Error en fatListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
