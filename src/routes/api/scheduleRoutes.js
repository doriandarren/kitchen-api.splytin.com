import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import Schedule from "../../models/Schedule.js";
import { scheduleListController } from "../../controllers/api/schedules/scheduleListController.js";
import { scheduleShowController } from "../../controllers/api/schedules/scheduleShowController.js";
import { scheduleStoreController } from "../../controllers/api/schedules/scheduleStoreController.js";
import { scheduleUpdateController } from "../../controllers/api/schedules/scheduleUpdateController.js";
import { scheduleDeleteController } from "../../controllers/api/schedules/scheduleDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], scheduleListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(Schedule) ),
    validateFields
], scheduleShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], scheduleStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Schedule) ),
    validateFields
], scheduleUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(Schedule) ),
    validateFields
], scheduleDeleteController);


export default router;    
