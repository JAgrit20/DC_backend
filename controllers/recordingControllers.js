import axios from 'axios'
import fs from 'fs'
import Downloader from 'nodejs-file-downloader'
import AWS from 'aws-sdk'
import Path from 'path'
const __dirname = process.cwd()
// const fs = require('fs');
// const AWS = require('aws-sdk');
import Recording from '../models/recordingModel.js'
const ID = 'AKIASHPACG3FLHK4KKJ5'
const SECRET = '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'

// The name of the bucket that you have created
const BUCKET_NAME = 'dcrecordings'
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
})
const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    // Set your region here
    LocationConstraint: 'ap-south-1',
  },
}
// @desc Push recording data in DB
// @route POST /recording
// @access Public

const D2S3 = async (recordings) => {
  const Mrecordings = await recordings.map(async (e, i) => {
    var name = e.outputFileName
    const path = Path.resolve(__dirname, 'temp')
    const downloader = new Downloader({
      url: e.downloadUrl,
      directory: path,
      fileName: `${name}`, //This will be the file name.
    })
    try {
      await downloader.download()
      const fileContent = fs.readFileSync(`${path}/${name}`)
      const params = {
        Bucket: BUCKET_NAME,
        Key: `${name}`, // File name you want to save as in S3
        Body: fileContent,
      }

      // Uploading files to the bucket
      try {
        var data = await s3.upload(params).promise()
        console.log(data)
        console.log(`File uploaded successfully`)
        fs.unlink(`${path}/${name}`, (err) => {
          if (err) throw err
          console.log('Temp cleared')
        })
        e.downloadUrl = data.Location
        return await e
      } catch (err) {
        console.log(err)
      }
    } catch (er) {
      console.log(er)
    }
    // if(i==body.recordings.length-1)
    // return body;
  })
  return Mrecordings
}

export const pushRecording = async (req, res, next) => {
  try {
    const body = req.body

    const recording = new Recording(body)
    const filter = body.meetingId
    const recordingExists = await Recording.findOne({ meetingId: filter })
    if (recordingExists) {
      res.status(404)
      const err = new Error('Recording already exists')
      next(err)
    } else {
      const newRecording = await recording.save()
      res.status(200).json(newRecording)
    }
  } catch (error) {
    console.log(error)
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}

// @desc Fetch student details from DB
// @route GET /recording
// @access Public

export const fetchRecordings = async (req, res, next) => {
  try {
    const recording = await Recording.find({})
    res.status(200).json(recording)
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}

// @desc Fetch student details from DB
// @route GET /recording/:id
// @access Public

export const fetchRecordingsById = async (req, res, next) => {
  try {
    const filter = req.params.uid
    const recording = await Recording.find({ studentUid: filter })
    if (recording) {
      res.status(200).json(recording)
    } else {
      res.status(404)
      const err = new Error('Recording does not exist')
      next(err)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}

// @desc Update recording details
// @route PUT /recording
// @access Public

export const updateRecording = async (req, res, next) => {
  try {
    const filter = req.params.uid
    const { recordings } = req.body
    const recording = await Recording.findOne({ meetingId: filter })
    if (recording) {
      recording.recordings = await Promise.all(await D2S3(recordings))
      const updatedRecord = await recording.save()
      res.status(200).json(updatedRecord)
    } else {
      res.status(404)
      const err = new Error('Record does not exist')
      next(err)
    }
  } catch (error) {
    res.status(500)
    const err = new Error('Internal Server Error')
    next(err)
  }
}
