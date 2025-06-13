import { response, request } from 'express';
import { ProteinRepository } from '../../../repositories/proteins/proteinRepository.js';


const repository = new ProteinRepository();


/**
 * @param {import('express').Request} req
 * @param {import('express').Response & { handler: import('../../../helpers/controllers/baseController.js').BaseController }} res
 */
export const proteinListController = async(req = request, res = response) => {

    try {
        const data = await repository.list();
        return res.handler.respondWithData('Protein list', data);

    } catch (error) {
        console.error('❌ Error en proteinListController:', error);
        return res.handler.respondHttpInternalError(error.message);
    }

}    
