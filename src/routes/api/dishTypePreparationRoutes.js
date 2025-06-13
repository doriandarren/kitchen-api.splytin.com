import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishTypePreparation from "../../models/DishTypePreparation.js";
import { dishTypePreparationListController } from "../../controllers/api/dish_type_preparations/dishTypePreparationListController.js";
import { dishTypePreparationShowController } from "../../controllers/api/dish_type_preparations/dishTypePreparationShowController.js";
import { dishTypePreparationStoreController } from "../../controllers/api/dish_type_preparations/dishTypePreparationStoreController.js";
import { dishTypePreparationUpdateController } from "../../controllers/api/dish_type_preparations/dishTypePreparationUpdateController.js";
import { dishTypePreparationDeleteController } from "../../controllers/api/dish_type_preparations/dishTypePreparationDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishTypePreparationListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishTypePreparation) ),
    validateFields
], dishTypePreparationShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishTypePreparationStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishTypePreparation) ),
    validateFields
], dishTypePreparationUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishTypePreparation) ),
    validateFields
], dishTypePreparationDeleteController);


export default router;    
