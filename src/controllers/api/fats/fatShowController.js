import { response } from "express";
import { FatRepository } from "../../../repositories/fats/fatRepository.js";



const repository = new FatRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const fatShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('Fat show', data);

    } catch (error) {
        console.error('❌ Error en fatListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
