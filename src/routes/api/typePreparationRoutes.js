import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import TypePreparation from "../../models/TypePreparation.js";
import { typePreparationListController } from "../../controllers/api/type_preparations/typePreparationListController.js";
import { typePreparationShowController } from "../../controllers/api/type_preparations/typePreparationShowController.js";
import { typePreparationStoreController } from "../../controllers/api/type_preparations/typePreparationStoreController.js";
import { typePreparationUpdateController } from "../../controllers/api/type_preparations/typePreparationUpdateController.js";
import { typePreparationDeleteController } from "../../controllers/api/type_preparations/typePreparationDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], typePreparationListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(TypePreparation) ),
    validateFields
], typePreparationShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], typePreparationStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(TypePreparation) ),
    validateFields
], typePreparationUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(TypePreparation) ),
    validateFields
], typePreparationDeleteController);


export default router;    
