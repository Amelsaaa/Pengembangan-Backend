const express = require('express');
const router = express.Router();
const jadwalController = require('../controller/mahasiswa');

router.get('/', jadwalController.get);
router.get('/:id', jadwalController.get);
router.post('/', jadwalController.post);
router.put('/:id', jadwalController.put);
router.delete('/:id', jadwalController.delete);

module.exports = router;