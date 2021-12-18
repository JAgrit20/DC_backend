import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  uid: {
    type: 'String',
  },
  meetingId: {
    type: String,
  },
})

const Student = mongoose.model('Student', studentSchema)

export default Student
