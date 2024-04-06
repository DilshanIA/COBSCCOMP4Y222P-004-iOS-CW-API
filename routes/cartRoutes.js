const express = require('express');
const bodyParser = require('body-parser');

const controller = require('../controllers/cartController');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', controller.get);

router.post('/', controller.create);

router.get('/:id', controller.getbyid);

router.get('/user/:id', controller.getUserCartItems);

router.delete('/:id', controller.remove);

router.put('/:id', controller.update);

module.exports = router;
