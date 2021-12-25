import Student from '../models/studentModel.js'

// @desc Push student details in DB
// @route POST /student
// @access Public

export const pushDetails = async (req, res, next) => {
  try {
    const student = new Student(req.body)
    const filter = req.body.uid
    const studentExists = await Student.findOne({ uid: filter })
    if (studentExists) {
      res.status(404)
      const err = new Error('Student already exists')
      next(err)
    } else {
      const newDetails = await student.save()
      res.status(200).json(newDetails)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}

// @desc Fetch student details from DB
// @route GET /student
// @access Public

export const fetchDetails = async (req, res, next) => {
  try {
    const filter = req.params.uid
    const student = await Student.findOne({ uid: filter })
    if (student) {
      res.status(200).json(student)
    } else {
      res.status(404)
      const err = new Error('Student does not exist')
      next(err)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}

// @desc Update student details
// @route PUT /student
// @access Public

export const updateDetails = async (req, res, next) => {
  try {
    const { uid, meetingId } = req.body
    const student = await Student.findOne({ uid: uid })
    if (student) {
      student.meetingId = meetingId
      const updatedStudent = await student.save()
      res.status(200).json(updatedStudent)
    } else {
      res.status(404)
      const err = new Error('Student does not exist')
      next(err)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}
