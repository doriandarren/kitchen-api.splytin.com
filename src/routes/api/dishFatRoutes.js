import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishFat from "../../models/DishFat.js";
import { dishFatListController } from "../../controllers/api/dish_fats/dishFatListController.js";
import { dishFatShowController } from "../../controllers/api/dish_fats/dishFatShowController.js";
import { dishFatStoreController } from "../../controllers/api/dish_fats/dishFatStoreController.js";
import { dishFatUpdateController } from "../../controllers/api/dish_fats/dishFatUpdateController.js";
import { dishFatDeleteController } from "../../controllers/api/dish_fats/dishFatDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishFatListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishFat) ),
    validateFields
], dishFatShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishFatStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishFat) ),
    validateFields
], dishFatUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishFat) ),
    validateFields
], dishFatDeleteController);


export default router;    
