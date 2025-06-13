import { response } from "express";
import { TypePreparationRepository } from "../../../repositories/type_preparations/typePreparationRepository.js";



const repository = new TypePreparationRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const typePreparationShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('TypePreparation show', data);

    } catch (error) {
        console.error('❌ Error en typePreparationListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
