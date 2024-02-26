import express from 'express';
import create from '../controllers/modules/create.js';
import read from '../controllers/modules/read.js';
import readOne from '../controllers/modules/readOne.js';
import update from '../controllers/modules/update.js';
import destroy from '../controllers/modules/destroy.js';

let router = express.Router();

router.post('/', create)
router.get('/', read)
router.get('/:_id', readOne)
router.put('/:u_id', update)
router.delete('/:id', destroy)

export default router
