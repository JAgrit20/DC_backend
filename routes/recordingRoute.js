import express from 'express'
import {
  pushRecording,
  fetchRecordings,
  updateRecording,
} from '../controllers/recordingControllers.js'

const router = express.Router()

router.route('/').post(pushRecording)
router.route('/:uid').get(fetchRecordings).put(updateRecording)

export default router
