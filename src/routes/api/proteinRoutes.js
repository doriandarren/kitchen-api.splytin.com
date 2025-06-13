import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import Protein from "../../models/Protein.js";
import { proteinListController } from "../../controllers/api/proteins/proteinListController.js";
import { proteinShowController } from "../../controllers/api/proteins/proteinShowController.js";
import { proteinStoreController } from "../../controllers/api/proteins/proteinStoreController.js";
import { proteinUpdateController } from "../../controllers/api/proteins/proteinUpdateController.js";
import { proteinDeleteController } from "../../controllers/api/proteins/proteinDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], proteinListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Protein) ),
    validateFields
], proteinShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], proteinStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Protein) ),
    validateFields
], proteinUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Protein) ),
    validateFields
], proteinDeleteController);


export default router;    
