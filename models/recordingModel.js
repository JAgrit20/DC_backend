import mongoose from 'mongoose'

const recordingSchema = new mongoose.Schema(
  {
    studentUid: {
      type: 'String',
      required: true,
    },
    meetingId: {
      type: 'String',
      required: true,
    },
    roomName: {
      type: 'String',
      required: true,
    },
    board: {
      type: 'String',
    },
    grade: {
      type: 'String',
    },
    subject: {
      type: 'String',
    },
    recordings: [],
  },
  {
    timestamps: true,
  }
)

const Recording = mongoose.model('Recording', recordingSchema)

export default Recording
