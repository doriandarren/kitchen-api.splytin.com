import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import Fat from "../../models/Fat.js";
import { fatListController } from "../../controllers/api/fats/fatListController.js";
import { fatShowController } from "../../controllers/api/fats/fatShowController.js";
import { fatStoreController } from "../../controllers/api/fats/fatStoreController.js";
import { fatUpdateController } from "../../controllers/api/fats/fatUpdateController.js";
import { fatDeleteController } from "../../controllers/api/fats/fatDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], fatListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Fat) ),
    validateFields
], fatShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], fatStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Fat) ),
    validateFields
], fatUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Fat) ),
    validateFields
], fatDeleteController);


export default router;    
