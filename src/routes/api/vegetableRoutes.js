import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import Vegetable from "../../models/Vegetable.js";
import { vegetableListController } from "../../controllers/api/vegetables/vegetableListController.js";
import { vegetableShowController } from "../../controllers/api/vegetables/vegetableShowController.js";
import { vegetableStoreController } from "../../controllers/api/vegetables/vegetableStoreController.js";
import { vegetableUpdateController } from "../../controllers/api/vegetables/vegetableUpdateController.js";
import { vegetableDeleteController } from "../../controllers/api/vegetables/vegetableDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], vegetableListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Vegetable) ),
    validateFields
], vegetableShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], vegetableStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Vegetable) ),
    validateFields
], vegetableUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Vegetable) ),
    validateFields
], vegetableDeleteController);


export default router;    
