import express from 'express';
import usersRouter from './users.js'
import workshopsRouter from './workshops.js'
import modulesRouter from './modules.js'
import activitiesRouter from './activities.js'
import authRouter from './auth.js';

let router = express.Router();

router.use('/users', usersRouter)
router.use('/workshops', workshopsRouter)
router.use('/modules', modulesRouter)
router.use('/activities',activitiesRouter )
router.use('/auth',authRouter)


export default router;
