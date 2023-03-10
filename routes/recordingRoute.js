import express from 'express'
import {
  pushRecording,
  fetchRecordings,
  fetchRecordingsById,
  updateRecording,
} from '../controllers/recordingControllers.js'

const router = express.Router()

router.route('/').post(pushRecording).get(fetchRecordings)
router.route('/:uid').get(fetchRecordingsById).put(updateRecording)

export default router
