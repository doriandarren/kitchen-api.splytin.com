import { response } from "express";
import { ProteinRepository } from "../../../repositories/proteins/proteinRepository.js";



const repository = new ProteinRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const proteinShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('Protein show', data);

    } catch (error) {
        console.error('❌ Error en proteinListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
