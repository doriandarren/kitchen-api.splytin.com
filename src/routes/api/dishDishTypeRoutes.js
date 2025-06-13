import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishDishType from "../../models/DishDishType.js";
import { dishDishTypeListController } from "../../controllers/api/dish_dish_types/dishDishTypeListController.js";
import { dishDishTypeShowController } from "../../controllers/api/dish_dish_types/dishDishTypeShowController.js";
import { dishDishTypeStoreController } from "../../controllers/api/dish_dish_types/dishDishTypeStoreController.js";
import { dishDishTypeUpdateController } from "../../controllers/api/dish_dish_types/dishDishTypeUpdateController.js";
import { dishDishTypeDeleteController } from "../../controllers/api/dish_dish_types/dishDishTypeDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishDishTypeListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishDishType) ),
    validateFields
], dishDishTypeShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishDishTypeStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishDishType) ),
    validateFields
], dishDishTypeUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishDishType) ),
    validateFields
], dishDishTypeDeleteController);


export default router;    
