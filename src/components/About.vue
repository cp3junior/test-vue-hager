<template>
  <div class="about" id="about">
    <b-row>
      <b-col cols="12">
        <b-container>
          <h2 class="about__info">In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.</h2>
        </b-container>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" class="about__image-container">
        <img src="@/assets/about.jpg" alt="About Picture" class="img-fluid" />
      </b-col>
      <b-col lg="6" class="about__text-container">
        <div class="about__text-container__texts">
          <h3>About our company</h3>
          <p>
            Are we human because of unique traits and attributes not shared with either animal or machine? The definition of “human” is circular: we are human by virtue of the properties that make us
            human (i.e., distinct from animal and machine). It is a definition by negation: that which separates us from animal and machine is our “human-ness”.
          </p>
          <p>
            Are we human because of unique traits and attributes not shared with either animal or machine? The definition of “human” is circular: we are human by virtue of the properties that make us
            human (i.e., distinct from animal and machine). It is a definition by negation: that which separates us from animal and machine is our “human-ness”.
          </p>
          <button class="button white-icon"><font-awesome-icon :icon="['fas', 'play']" />Whatch video</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss">
.about {
  &__info {
    padding: 5rem 0;
    margin: 0;
    font-weight: 100;
    font-style: italic;
    font-family: "Roboto";
    font-size: 22px;
    color: #404040;
    text-align: center;
  }

  &__image-container {
    padding: 0;
    display: flex;
    img {
      object-fit: cover;
    }
  }

  &__text-container {
    background: #ea4235;
    box-shadow: -2px 0 10px 0 rgba(0, 0, 0, 0.5);
    padding: 0;

    &__texts {
      padding: 4rem;
      font-family: "Montserrat";
      color: #ffffff;
      margin: 0;

      h3 {
        text-transform: uppercase;
        padding: 1rem 0;
        font-size: 22px;
      }

      p {
        padding: 0.5rem 0;
        font-size: 22px;
      }
    }
  }
}

/* Responsive */
@media (max-width: 992px) {
  .about {
    &__info {
      font-size: 18px;
    }
    &__text-container {
      &__texts {
        h3,
        p {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
