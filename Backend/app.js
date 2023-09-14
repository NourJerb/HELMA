const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const config = require('./config'); // Import the configuration file

const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const { userEmail, imageSrc, productName, id } = req.body;

    const transporter = nodemailer.createTransport(config.emailConfig);

    const mailOptions = {
      from: config.fromEmail,
      to: userEmail,
      subject: `Achat du produit de référence ${id}`, 
      html: `<h1>Bonjour,</h1>
            <p>Merci d'avoir effectué un achat de :</p>
            <p>Nom du produit: ${productName}</p>
            <p>Référence du produit: ${id}</p>
            <img src="${imageSrc}" alt="Product Image">
            <p>Votre demande d'achat a été bien reçu.</p>
            <p>Nous vous contacterons dès que possible afin de vous offrir le produit souhaité.</p>
            <p>HelmaCreations,</p>`,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
