import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
// Allowing all origins for simple frontend communication locally
app.use(cors());

// Configure Nodemailer Transporter
// It relies on standard environment variables provided at runtime.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // NOTE: If using Gmail, use an App Password, NOT your standard login password.
  },
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Standard Validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields.' });
    }
    
    // Regex Email Validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    // Build the email envelope
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kadamshubhamzunjararao@gmail.com', // Recipient matching user spec
      replyTo: email, 
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email (wait iteratively for completion)
    await transporter.sendMail(mailOptions);
    
    // Forward the completion context to the React UI
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email Sending Error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send message. Please ensure environment credentials are correct.' });
  }
});

app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
