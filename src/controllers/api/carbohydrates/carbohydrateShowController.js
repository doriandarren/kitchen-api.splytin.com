import { response } from "express";
import { CarbohydrateRepository } from "../../../repositories/carbohydrates/carbohydrateRepository.js";



const repository = new CarbohydrateRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const carbohydrateShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('Carbohydrate show', data);

    } catch (error) {
        console.error('❌ Error en carbohydrateListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
