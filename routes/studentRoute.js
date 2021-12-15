import express from 'express'
import {
  pushDetails,
  fetchDetails,
  updateDetails,
} from '../controllers/studentController.js'

const router = express.Router()

router.route('/').get(fetchDetails).post(pushDetails).put(updateDetails)

export default router
