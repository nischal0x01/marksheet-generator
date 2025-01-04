const express = require("express");
const Certificate = require("../models/Certificate");
const generateCertificate = require("../utils/generateCertificate");

const router = express.Router();

router.post("/generate-certificate", async (req, res) => {
  const { studentName, marks } = req.body;

  if (!studentName || !marks || !Array.isArray(marks)) {
    return res.status(400).json({ error: "Invalid data format." });
  }

  try {
    // Generate Certificate
    const certificateImage = await generateCertificate(studentName, marks);

    // Save to MongoDB
    const newCertificate = new Certificate({ studentName, marks, certificateImage });
    await newCertificate.save();

    res.status(201).json({ message: "Certificate generated and saved!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate certificate." });
  }
});

module.exports = router;
