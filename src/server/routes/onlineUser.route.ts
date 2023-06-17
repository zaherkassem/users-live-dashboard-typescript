import  * as express from 'express';
import * as onLineUsersCtrl from '../controllers/onlineUsers.controller';
import isAuthenticated from '../middlewares/authenticate';

const router = express.Router();

router
  .route('/')
  .post((req, res) => {
    onLineUsersCtrl.store(req, res);
  })
  .get((req, res) => {
    onLineUsersCtrl.findAll(req, res);
  });

router
  .route('/:id')
  .get((req, res) => {
    onLineUsersCtrl.findById(req, res);
  })
  .put(isAuthenticated, (req, res) => {
    onLineUsersCtrl.update(req, res);
  })
  .delete(isAuthenticated, (req, res) => {
    onLineUsersCtrl.destroy(req, res);
  });

export default router;
