import Student from '../models/studentModel.js'

// @desc Push student details in DB
// @route POST /student
// @access Public

export const pushDetails = async (req, res, next) => {
  try {
    const student = new Student(req.body)
    const newDetails = await student.save()
    res.status(201).json(newDetails)
  } catch (error) {
    res.status(404)
    const err = new Error('Error pushing student details')
    next(err)
  }
}

// @desc Fetch all student details from DB
// @route GET /student
// @access Public

export const fetchAllDetails = async (req, res, next) => {
  try {
    const student = await Student.find({})
    res.status(200).json(student)
  } catch (error) {
    res.status(404)
    const err = new Error('Error fetching all student details')
    next(err)
  }
}

// @desc Fetch student details from DB
// @route GET /student/:id
// @access Public

export const fetchDetailsById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)
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
// @route PUT /student/:id
// @access Public

export const updateDetailsById = async (req, res, next) => {
  try {
    const { meetingId } = req.body
    const student = await Student.findById(req.params.id)
    if (student) {
      student.meetingId = meetingId
      const updatedStudent = await student.save()
      res
        .status(200)
        .json({ msg: 'meetingId updated successfully', updatedStudent })
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
