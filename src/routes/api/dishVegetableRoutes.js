import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishVegetable from "../../models/DishVegetable.js";
import { dishVegetableListController } from "../../controllers/api/dish_vegetables/dishVegetableListController.js";
import { dishVegetableShowController } from "../../controllers/api/dish_vegetables/dishVegetableShowController.js";
import { dishVegetableStoreController } from "../../controllers/api/dish_vegetables/dishVegetableStoreController.js";
import { dishVegetableUpdateController } from "../../controllers/api/dish_vegetables/dishVegetableUpdateController.js";
import { dishVegetableDeleteController } from "../../controllers/api/dish_vegetables/dishVegetableDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishVegetableListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishVegetable) ),
    validateFields
], dishVegetableShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishVegetableStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishVegetable) ),
    validateFields
], dishVegetableUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishVegetable) ),
    validateFields
], dishVegetableDeleteController);


export default router;    
