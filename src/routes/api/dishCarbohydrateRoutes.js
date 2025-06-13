import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishCarbohydrate from "../../models/DishCarbohydrate.js";
import { dishCarbohydrateListController } from "../../controllers/api/dish_carbohydrates/dishCarbohydrateListController.js";
import { dishCarbohydrateShowController } from "../../controllers/api/dish_carbohydrates/dishCarbohydrateShowController.js";
import { dishCarbohydrateStoreController } from "../../controllers/api/dish_carbohydrates/dishCarbohydrateStoreController.js";
import { dishCarbohydrateUpdateController } from "../../controllers/api/dish_carbohydrates/dishCarbohydrateUpdateController.js";
import { dishCarbohydrateDeleteController } from "../../controllers/api/dish_carbohydrates/dishCarbohydrateDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishCarbohydrateListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishCarbohydrate) ),
    validateFields
], dishCarbohydrateShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishCarbohydrateStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishCarbohydrate) ),
    validateFields
], dishCarbohydrateUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishCarbohydrate) ),
    validateFields
], dishCarbohydrateDeleteController);


export default router;    
