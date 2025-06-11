import { Router } from "express";
import { check, param } from "express-validator";
import { validateFields } from "../../middlewares/validateFields.js";
import { checkIdExists } from "../../helpers/validators/checkIdExists.js";
import { validateJWT } from "../../middlewares/validateJWT.js";
import RoleUser from "../../models/RoleUser.js";
import { roleUserListController } from "../../controllers/shared/roleUsers/roleUserListController.js";
import { roleUserShowController } from "../../controllers/shared/roleUsers/roleUserShowController.js";
import { roleUserStoreController } from "../../controllers/shared/roleUsers/roleUserStoreController.js";
import { roleUserUpdateController } from "../../controllers/shared/roleUsers/roleUserUpdateController.js";
import { roleUserDeleteController } from "../../controllers/shared/roleUsers/roleUserDeleteController.js";


const router = Router();


/**
 * List
 */
router.get('/list', [
    validateJWT,
], roleUserListController);


/**
 * Show
 */
router.get('/show/:id', [
    validateJWT,
    //check('name', 'El name es obligatorio').not().isEmpty(),
    param('id').custom( checkIdExists(RoleUser) ),
    validateFields
], roleUserShowController);

/**
 * Store
 */
router.post('/store', [
    validateJWT,
], roleUserStoreController);

/**
 * Update
 */
router.put('/update/:id', [
    validateJWT,
    param('id').custom( checkIdExists(RoleUser) ),
    validateFields
], roleUserUpdateController);

/**
 * Delete
 */ 
router.delete('/delete/:id', [
    validateJWT,
    param('id').custom( checkIdExists(RoleUser) ),
    validateFields
], roleUserDeleteController);


export default router;    
