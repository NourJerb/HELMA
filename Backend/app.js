const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path'); // Import the 'path' module


const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const { userEmail, imageSrc, productName } = req.body; // Extract the additional data
    console.log(req.body)
    // Create a transporter using SMTP details (Gmail in this case)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "ketata.15.selim@gmail.com", // Your email address
            pass: "fednmzjrdvsquqim",   // App password (not your main password)
        },
    });






// Définissez les options de l'e-mail avec l'image incorporée
const mailOptions = {
  from: 'ketata.152.selim@gmail.com',
  to: userEmail,
  subject: 'Testing Nodemailer',
  html: `<h1>Hello from Nodemailer!</h1>
        <p>This is a test email.</p>
        <p>Product Name: ${productName}</p>
        `,

};

    // Send the email and wait for the result
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
