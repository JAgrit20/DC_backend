import Recording from '../models/recordingModel.js'

// @desc Push recording data in DB
// @route POST /recording
// @access Public

export const pushRecording = async (req, res, next) => {
  try {
    const recording = new Recording(req.body)
    const filter = req.body.studentUid
    const recordingExists = await Recording.findOne({ studentUid: filter })
    if (recordingExists) {
      res.status(404)
      const err = new Error('Recording already exists')
      next(err)
    } else {
      const newRecording = await recording.save()
      res.status(200).json(newRecording)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}

// @desc Fetch student details from DB
// @route GET /recording
// @access Public

export const fetchRecordings = async (req, res, next) => {
  try {
    const filter = req.params.uid
    const recording = await Recording.findOne({ studentUid: filter })
    if (recording) {
      res.status(200).json(recording)
    } else {
      res.status(404)
      const err = new Error('Recording does not exist')
      next(err)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}

// @desc Update recording details
// @route PUT /recording
// @access Public

export const updateRecording = async (req, res, next) => {
  try {
    const { studentUid, recordings } = req.body
    const recording = await Recording.findOne({ studentUid: studentUid })
    if (recording) {
      recording.recordings = recordings
      const updatedRecord = await recording.save()
      res.status(200).json(updatedRecord)
    } else {
      res.status(404)
      const err = new Error('Record does not exist')
      next(err)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}
