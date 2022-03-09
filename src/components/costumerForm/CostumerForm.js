require('dotenv').config();
// const nodemailer = require('nodemailer');

export default {
  name: 'CostumerForm',
  components: {
  },
  props: {},
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      nif: '',
      message: '',
    }
  },
  methods: {
    sendEmail() {
      // let transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     user: process.env.EMAIL,
      //     pass: process.env.PASSWORD
      //   }
      // })
      
      // let mailOptions = {
      //   from: 'nunorodrigues.website@gmail.com',
      //   to: 'nunorodrigues.website@gmail.com',
      //   subject: 'Test',
      //   text: 'Conteúdo do email'
      // }
      
      // transporter.sendMail(mailOptions, function(err) {
      //   if (err) {
      //     console.log('Error:', err);
      //   } else {
      //     console.log('Email sent');
      //   }
      // });
    }
  }
}