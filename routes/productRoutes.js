const express = require('express');
const bodyParser = require('body-parser');

const controller = require('../controllers/productController');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', controller.get);

router.post('/', controller.create);

router.get('/:id', controller.getbyid);

router.get('/catogory/:id', controller.getbycatid);
router.get('/category/name/:name', controller.getbycatname);


router.delete('/:id', controller.remove);

router.put('/:id', controller.update);

module.exports = router;
