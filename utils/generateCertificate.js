const { createCanvas } = require("canvas");

const generateCertificate = async (studentName, marks) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  
  // Background
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);

  // Add Title
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText("Certificate of Achievement", width / 2, 50);

  // Add Student Name
  ctx.font = "24px Arial";
  ctx.fillText(`Awarded to: ${studentName}`, width / 2, 100);

  // Add Marks
  ctx.font = "20px Arial";
  let yPosition = 150;

  // Debug marks data
  console.log("Marks data received:", marks);

  marks.forEach((item, index) => {
    const { subject, mark } = item;

    // Debug each item
    console.log(`Entry ${index + 1}:`, { subject, mark });

    // Handle missing or undefined values
    const subjectText = subject || "Unknown Subject";
    const markText = typeof mark === "number" ? mark : "N/A";

    ctx.fillText(`${subjectText}: ${markText}`, width / 2, yPosition);
    yPosition += 30;
  });

  // Convert Canvas to Buffer
  return canvas.toBuffer("image/jpeg");
};

module.exports = generateCertificate;
