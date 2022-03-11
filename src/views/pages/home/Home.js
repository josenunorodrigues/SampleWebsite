import CostumerForm from "../../components/costumerForm/CostumerForm.vue";
import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'Home',
  components: {
    CostumerForm,
    Swiper,
    SwiperSlide,
  },
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  methods: {
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
}