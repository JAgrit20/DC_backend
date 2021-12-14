import mongoose from 'mongoose'

const sampleSchema = new mongoose.Schema({
  field1: {
    type: String,
  },
  field2: {
    type: String,
  },
})

const Sample = mongoose.model('Sample', sampleSchema)

export default Sample
