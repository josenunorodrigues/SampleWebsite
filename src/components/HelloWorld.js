import Email from "../tools/smtp.js";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
      subject: 'Subject',
      body: 'Body',
    }
  },
  methods: {
    sendEmail() {
      console.log("test");
      Email.send({
        SecureToken : "45efc885-5627-4007-8587-228799c9a15b",
        To : this.email,
        From : 'josenunorodrigues@outlook.com',
        Subject : this.subject,
        Body : this.body,
      }).then(
          message => console.log(message)
      );
    }
  }
}