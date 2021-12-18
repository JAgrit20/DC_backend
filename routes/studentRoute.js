import express from 'express'
import {
  pushDetails,
  fetchDetails,
  updateDetails,
} from '../controllers/studentController.js'

const router = express.Router()

router.route('/').post(pushDetails).put(updateDetails)
router.route('/:uid').get(fetchDetails)

export default router
