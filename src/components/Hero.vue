<template>
  <div id="home">
    <swiper ref="mySlider" navigation :options="sliderOptions">
      <swiper-slide>
        <div class="slider" :style="`backgroundImage: linear-gradient(rgba(161, 26, 16, 0.15) 100%, rgba(0,0,0,0.1) 1%),url('${require('@/assets/slider1.jpg')}';`">
          <div class="slider__holder">
            <h1>We transform every dream into digital reality</h1>
            <button class="button red">Discover</button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slider" :style="`backgroundImage: linear-gradient(rgba(161, 26, 16, 0.15) 100%, rgba(0,0,0,0.1) 1%),url('${require('@/assets/slider2.jpg')}';`">
          <div class="slider__holder">
            <h1>We transform every dream into digital reality</h1>
            <button class="button red">Discover</button>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev" @click="swiper.slidePrev()"></div>
      <div class="swiper-button-next" slot="button-next" @click="swiper.slideNext()"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "Hero",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      sliderOptions: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySlider.$swiper;
    }
  }
};
</script>

<style lang="scss">
.slider {
  height: 70vh;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &__holder {
    width: 80%;
  }

  h1 {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    font-family: "Montserrat";
    font-weight: 900;
    font-size: 56px;
    line-height: 60px;
    color: #ffffff;
    width: 60%;
  }
  button {
    margin: 2rem 0;
  }
}
.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  &::after {
    font-size: 3rem;
    font-weight: 100;
  }
}
.swiper-button-prev {
  left: 5%;
}
.swiper-button-next {
  right: 5%;
}

/* Responsive */
@media (max-width: 992px) {
  .slider {
    height: 50vh;
    &__holder {
      width: 75%;
    }
    h1 {
      font-size: 40px;
      line-height: 40px;
    }
    button {
      font-size: 18px;
      margin: 1.5rem 0;
    }
  }
}
@media (max-width: 576px) {
  .slider {
    height: 40vh;
    h1 {
      width: 80%;
      font-size: 25px;
      line-height: 30px;
    }
    button {
      font-size: 12px;
      margin: 1rem 0;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      font-size: 2rem;
    }
  }
  .swiper-button-prev {
    left: 3%;
  }
  .swiper-button-next {
    right: 3%;
  }
}
</style>
