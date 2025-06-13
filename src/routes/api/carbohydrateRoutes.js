import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import Carbohydrate from "../../models/Carbohydrate.js";
import { carbohydrateListController } from "../../controllers/api/carbohydrates/carbohydrateListController.js";
import { carbohydrateShowController } from "../../controllers/api/carbohydrates/carbohydrateShowController.js";
import { carbohydrateStoreController } from "../../controllers/api/carbohydrates/carbohydrateStoreController.js";
import { carbohydrateUpdateController } from "../../controllers/api/carbohydrates/carbohydrateUpdateController.js";
import { carbohydrateDeleteController } from "../../controllers/api/carbohydrates/carbohydrateDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], carbohydrateListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Carbohydrate) ),
    validateFields
], carbohydrateShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], carbohydrateStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Carbohydrate) ),
    validateFields
], carbohydrateUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Carbohydrate) ),
    validateFields
], carbohydrateDeleteController);


export default router;    
