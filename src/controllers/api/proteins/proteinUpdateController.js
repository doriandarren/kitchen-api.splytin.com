import { response } from "express";
import { ProteinRepository } from '../../../repositories/proteins/proteinRepository.js';


const repository = new ProteinRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const proteinUpdateController = async(req, res = response) => {

    const { id } = req.params;

    const { 
       name
    } = req.body;

    const dataToUpdate = {};

    if (name !== undefined) dataToUpdate.name = name;

    try {
        const data = await repository.update(id, dataToUpdate);
        return res.handler.respondWithData('Protein list', data);

    } catch (error) {
        console.error('❌ Error en proteinListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}
