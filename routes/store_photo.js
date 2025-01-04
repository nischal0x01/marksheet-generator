const express = require('express');
const multer = require('multer');
const Photo = require('../models/Photo');
const router = express.Router();

// Set up file storage with Multer
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 400 * 1024 }, // Limit file size to 400KB
}).single('photo');

// Photo upload endpoint
router.post('/upload', upload, async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No photo uploaded' });
  }

  try {
    // Create a new photo document
    const newPhoto = new Photo({
      image: req.file.buffer, // Store the image as a buffer
      contentType: req.file.mimetype,
    });

    // Save to MongoDB
    await newPhoto.save();
    res.status(200).json({ message: 'Photo uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading photo', details: error.message });
  }
});


module.exports = router;