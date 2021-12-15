import express from 'express'
import {
  pushDetails,
  fetchAllDetails,
  fetchDetailsById,
  updateDetailsById,
} from '../controllers/studentController.js'

const router = express.Router()

router.route('/student').get(fetchAllDetails).post(pushDetails)
router.route('/student/:id').get(fetchDetailsById).put(updateDetailsById)

export default router
