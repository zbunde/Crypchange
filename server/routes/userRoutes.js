import express from 'express';
import * as userController from '../controllers/userController';
const router = express.Router();

router.route('/')
     .get(userController.getUsers)
     .post(userController.addUser)
     .put(userController.updateUser);
router.route('/:id')
      .delete(userController.deleteUser);

export default router;
