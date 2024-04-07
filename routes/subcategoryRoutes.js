const express = require('express');
const bodyParser = require('body-parser');

const controller = require('../controllers/subcategoryController');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', controller.get);

router.post('/', controller.create);

router.get('/:id', controller.getbyid);

// router.get('/catogory/:id', controller.getbycatid);

// router.get('/category/name/:name', controller);


router.delete('/:id', controller.remove);

//router.put('/:id', controller.u);

module.exports = router;
