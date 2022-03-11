// Import FilePond
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export default {
  name: 'CostumerForm',
  components: {
    FilePond,
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

      myFiles: [],
    }
  },
  methods: {
    handleFilePondInit: function () {
      console.log('FilePond has initialized');
      this.$refs.pond.getFiles();
    },
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