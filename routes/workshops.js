import express from 'express';
let router = express.Router();
import create from '../controllers/workshops/create.js';
import read from '../controllers/workshops/read.js';
import readOne from '../controllers/workshops/readOne.js';
import update from '../controllers/workshops/update.js';
import destroy from '../controllers/workshops/destroy.js';
import carousel from '../controllers/workshops/carousel.js';



router.post('/', create)

router.get('/', read)
router.get('/carousel', carousel)
router.get('/:_id', readOne)

router.put('/:u_id', update)

router.delete('/:id', destroy)

export default router;