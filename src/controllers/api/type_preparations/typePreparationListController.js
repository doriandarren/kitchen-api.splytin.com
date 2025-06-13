import { response, request } from 'express';
import { TypePreparationRepository } from '../../../repositories/type_preparations/typePreparationRepository.js';


const repository = new TypePreparationRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const typePreparationListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('TypePreparation list', data);

    } catch (error) {
        console.error('❌ Error en typePreparationListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
