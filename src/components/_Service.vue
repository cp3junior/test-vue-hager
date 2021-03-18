<template>
  <b-col xl="3" md="6" class="service">
    <div class="service__img">
      <img :src="service.img" :alt="`Image ${service.title}`" />
    </div>
    <h2 class="service__title">{{ service.title }}</h2>
    <p class="service__text">{{ service.text }}</p>
  </b-col>
</template>

<script>
export default {
  name: "Service",
  props: {
    service: {
      type: Object,
      default: () => {
        return { title: "", img: "", text: "" };
      }
    }
  }
};
</script>

<style lang="scss">
.service {
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
  &__img {
    img {
      height: 85px;
      width: auto;
    }
  }
  &__title {
    text-transform: uppercase;
    font-size: 22px;
    margin-top: 1.5rem;
  }
  &__text {
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 300;
    line-height: 1.3;
  }
}
</style>
