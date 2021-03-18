<template>
  <b-col class="work" :style="{ backgroundImage: hoverStyle }" xl="3" lg="4" md="6" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <h2 class="work__title">{{ work.title }}</h2>
    <p class="work__description">{{ work.description }}</p>
    <div class="work__button">
      <button class="button white-outline hidden-btn" @click="$emit('handleClick', work.id)">Discover</button>
    </div>
  </b-col>
</template>
<script>
export default {
  name: "Work",
  props: {
    work: {
      type: Object,
      default: () => {
        return { id: 0, title: "", img: "", description: "", texts: [] };
      }
    }
  },
  data() {
    return {
      isHovered: false
    };
  },
  computed: {
    hoverStyle() {
      return this.isHovered
        ? "linear-gradient(to bottom, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.1) 150%), url('" + this.work.img + "')"
        : "linear-gradient(to bottom, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.1) 80%), url('" + this.work.img + "')";
    }
  },
  methods: {
    mouseOver() {
      this.isHovered = !this.isHovered;
    }
  }
};
</script>

<style lang="scss">
.work {
  height: 22rem;
  color: #ffffff;
  padding: 1rem;
  transition: all ease 0.4s;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  &__title {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 18px;
  }
  &__description {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
  }
  &__button {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    .hidden-btn {
      visibility: visible;
    }
  }
  .hidden-btn {
    visibility: hidden;
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .work {
    .hidden-btn {
      visibility: visible;
    }
  }
}
</style>
