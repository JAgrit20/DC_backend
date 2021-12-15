import mongoose from 'mongoose'

const Student = new mongoose.Schema({
  Board : {
    type: String,
  },
  City : {
    type: String,
  },
  Email  : {
    type: String,
  },
  Grade  : {
    type: String,
  },
  Institute  : {
    type: String,
  },
  State  : {
    type: String,
  },
  dob  : {
    type: String,
  },
  firstname  : {
    type: String,
  },
  City : {
    type: String,
  },
  lastname  : {
    type: String,
  },
  pdoubts  : {
    type: String,
  },
  phonenumber  : {
    type: String,
  },
  photoUrl  : {
    type: String,
  },
  slang   : {
    type: String,
  },
  tdoubts   : {
    type: String,
  },
  validity   : {
    type: String,
  },
})

const Sample = mongoose.model('Sample', Student)

export default Sample
