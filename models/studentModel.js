import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  board: {
    type: String,
  },
  city: {
    type: String,
  },
  email: {
    type: String,
  },
  grade: {
    type: String,
  },
  institute: {
    type: String,
  },
  state: {
    type: String,
  },
  dob: {
    type: String,
  },
  firstname: {
    type: String,
  },
  city: {
    type: String,
  },
  lastname: {
    type: String,
  },
  meetingId: {
    type: String,
  },
  pdoubts: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
  slang: {
    type: String,
  },
  tdoubts: {
    type: String,
  },
  validity: {
    type: String,
  },
})

const Student = mongoose.model('Student', studentSchema)

export default Student
