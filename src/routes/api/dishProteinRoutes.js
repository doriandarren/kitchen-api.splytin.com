import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishProtein from "../../models/DishProtein.js";
import { dishProteinListController } from "../../controllers/api/dish_proteins/dishProteinListController.js";
import { dishProteinShowController } from "../../controllers/api/dish_proteins/dishProteinShowController.js";
import { dishProteinStoreController } from "../../controllers/api/dish_proteins/dishProteinStoreController.js";
import { dishProteinUpdateController } from "../../controllers/api/dish_proteins/dishProteinUpdateController.js";
import { dishProteinDeleteController } from "../../controllers/api/dish_proteins/dishProteinDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishProteinListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishProtein) ),
    validateFields
], dishProteinShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishProteinStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishProtein) ),
    validateFields
], dishProteinUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishProtein) ),
    validateFields
], dishProteinDeleteController);


export default router;    
