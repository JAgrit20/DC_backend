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
    recordings: [
      {
        status: { type: 'String' },
        outputFileName: { type: 'String' },
        downloadUrlExpiry: { type: 'String' },
        roomUUID: { type: 'String' },
        downloadUrl: { type: 'String' },
        errMessage: { type: 'String' },
        startedTime: { type: 'String' },
        stoppedTime: { type: 'String' },
        invokedTime: { type: 'String' },
        fileSize: { type: 'Number' },
        id: { type: 'String' },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Recording = mongoose.model('Recording', recordingSchema)

export default Recording
