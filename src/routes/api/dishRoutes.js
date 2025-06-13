import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import Dish from "../../models/Dish.js";
import { dishListController } from "../../controllers/api/dishes/dishListController.js";
import { dishShowController } from "../../controllers/api/dishes/dishShowController.js";
import { dishStoreController } from "../../controllers/api/dishes/dishStoreController.js";
import { dishUpdateController } from "../../controllers/api/dishes/dishUpdateController.js";
import { dishDeleteController } from "../../controllers/api/dishes/dishDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Dish) ),
    validateFields
], dishShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Dish) ),
    validateFields
], dishUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Dish) ),
    validateFields
], dishDeleteController);


export default router;    
