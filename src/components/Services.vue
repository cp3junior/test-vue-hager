<template>
  <b-container class="services" id="services">
    <h2 class="services__title">Our Services</h2>
    <b-row class="services__service-container">
      <Service v-for="(service, i) in services" :key="i" :service="service" />
    </b-row>
  </b-container>
</template>

<script>
import Service from "./_Service";

export default {
  name: "Services",
  components: {
    Service
  },
  data() {
    return {
      services: [
        {
          img: require("@/assets/laptop.svg"),
          title: "Lorem Ipsum",
          text: "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder were ever tied together."
        },
        {
          img: require("@/assets/cog.svg"),
          title: "Lorem Ipsum",
          text: "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder were ever tied together."
        },
        {
          img: require("@/assets/chart.svg"),
          title: "Lorem Ipsum",
          text: "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder were ever tied together."
        },
        {
          img: require("@/assets/paint.svg"),
          title: "Lorem Ipsum",
          text: "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder were ever tied together."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.services {
  padding: 4rem 0;
  font-family: "Montserrat";
  color: #404040;
  &__title {
    text-align: center;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 5rem;
  }
  &__service-container {
    padding: 1rem 0;
  }
}

/* Responsive */
@media (max-width: 992px) {
  .services {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
