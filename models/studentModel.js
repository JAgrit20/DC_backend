import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  uid: {
    type: 'String',
    required: true,
  },
  meetingId: {
    type: String,
    required: true,
  },
})

const Student = mongoose.model('Student', studentSchema)

export default Student
