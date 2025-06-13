import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishSeason from "../../models/DishSeason.js";
import { dishSeasonListController } from "../../controllers/api/dish_seasons/dishSeasonListController.js";
import { dishSeasonShowController } from "../../controllers/api/dish_seasons/dishSeasonShowController.js";
import { dishSeasonStoreController } from "../../controllers/api/dish_seasons/dishSeasonStoreController.js";
import { dishSeasonUpdateController } from "../../controllers/api/dish_seasons/dishSeasonUpdateController.js";
import { dishSeasonDeleteController } from "../../controllers/api/dish_seasons/dishSeasonDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishSeasonListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishSeason) ),
    validateFields
], dishSeasonShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishSeasonStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishSeason) ),
    validateFields
], dishSeasonUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishSeason) ),
    validateFields
], dishSeasonDeleteController);


export default router;    
