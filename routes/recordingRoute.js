import express from 'express'
import {
  pushRecording,
  fetchRecordings,
  updateRecording,
} from '../controllers/recordingControllers.js'

const router = express.Router()

router.route('/').post(pushRecording).put(updateRecording)
router.route('/:uid').get(fetchRecordings)

export default router
