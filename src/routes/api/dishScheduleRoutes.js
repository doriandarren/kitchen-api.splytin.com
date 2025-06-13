import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import DishSchedule from "../../models/DishSchedule.js";
import { dishScheduleListController } from "../../controllers/api/dish_schedules/dishScheduleListController.js";
import { dishScheduleShowController } from "../../controllers/api/dish_schedules/dishScheduleShowController.js";
import { dishScheduleStoreController } from "../../controllers/api/dish_schedules/dishScheduleStoreController.js";
import { dishScheduleUpdateController } from "../../controllers/api/dish_schedules/dishScheduleUpdateController.js";
import { dishScheduleDeleteController } from "../../controllers/api/dish_schedules/dishScheduleDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], dishScheduleListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(DishSchedule) ),
    validateFields
], dishScheduleShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], dishScheduleStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishSchedule) ),
    validateFields
], dishScheduleUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(DishSchedule) ),
    validateFields
], dishScheduleDeleteController);


export default router;    
