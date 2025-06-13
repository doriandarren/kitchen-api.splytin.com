import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishType from "../../models/DishType.js";
import { dishTypeListController } from "../../controllers/api/dish_types/dishTypeListController.js";
import { dishTypeShowController } from "../../controllers/api/dish_types/dishTypeShowController.js";
import { dishTypeStoreController } from "../../controllers/api/dish_types/dishTypeStoreController.js";
import { dishTypeUpdateController } from "../../controllers/api/dish_types/dishTypeUpdateController.js";
import { dishTypeDeleteController } from "../../controllers/api/dish_types/dishTypeDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishTypeListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishType) ),
    validateFields
], dishTypeShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishTypeStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishType) ),
    validateFields
], dishTypeUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishType) ),
    validateFields
], dishTypeDeleteController);


export default router;    
