import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import Season from "../../models/Season.js";
import { seasonListController } from "../../controllers/api/seasons/seasonListController.js";
import { seasonShowController } from "../../controllers/api/seasons/seasonShowController.js";
import { seasonStoreController } from "../../controllers/api/seasons/seasonStoreController.js";
import { seasonUpdateController } from "../../controllers/api/seasons/seasonUpdateController.js";
import { seasonDeleteController } from "../../controllers/api/seasons/seasonDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], seasonListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Season) ),
    validateFields
], seasonShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], seasonStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Season) ),
    validateFields
], seasonUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Season) ),
    validateFields
], seasonDeleteController);


export default router;    
