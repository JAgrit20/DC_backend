import express from 'express'
import { sample } from '../controllers/sampleController.js'

const router = express.Router()

router.route('/sample').get(sample)

export default router
