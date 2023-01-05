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
    subject: {
      type: 'String',
    },
    
    board: {
      type: 'String',
    },

    grade: {
      type: 'String',
    },
    topic: {
      type: 'String',
    },
    keyword: {
      type: 'String',
    },
    doubt_imageUrl: {
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
