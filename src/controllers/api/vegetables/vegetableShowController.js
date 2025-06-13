import { response } from "express";
import { VegetableRepository } from "../../../repositories/vegetables/vegetableRepository.js";



const repository = new VegetableRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const vegetableShowController = async(req, res = response) => {
    
    const { id } = req.params;

    try {
        const data = await repository.show(id);

        return res.handler.respondWithData('Vegetable show', data);

    } catch (error) {
        console.error('❌ Error en vegetableListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}   
