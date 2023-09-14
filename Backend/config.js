
module.exports = {
    emailConfig: {
      service: process.env.EMAIL_SERVICE || 'Gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-email-password',
      },
    },
    fromEmail: process.env.FROM_EMAIL || 'helmacreations@gmail.com',
    port: process.env.PORT || 8000,
  };
  