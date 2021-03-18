<template>
  <b-container fluid class="contact" id="contact">
    <b-container>
      <b-row class="contact__container">
        <b-col xl="5" lg="6" md="6" class="contact__info">
          <div class="contact__info__tabs-container">
            <b-tabs content-class="mt-3">
              <b-tab title="Paris" active>
                <h3>1 rue de Paris - 75009 Paris</h3>
                <h4>+33 9 34 67 89 45</h4>
              </b-tab>
              <b-tab title="London">
                <h3>57 Ullrich Crossroad - London</h3>
                <h4>+33 9 34 67 89 45</h4>
              </b-tab>
            </b-tabs>
          </div>
          <div class="contact__info__social">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
              </li>
              <li>
                <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a>
              </li>
              <li>
                <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col xl="7" lg="6" md="6" class="contact__form-container">
          <h3 class="contact__form-container__title">Say Hello</h3>
          <form class="contact__form-container__form">
            <input required class="custom-input" type="text" placeholder="Name *" />
            <input required class="custom-input" type="email" placeholder="Email *" />
            <textarea required class="custom-input" placeholder="Message *"></textarea>
            <button class="button white-outline center-btn" type="button">Send</button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss">
.contact {
  background: #323232;

  &__container {
    padding: 3rem 0;
  }

  &__info {
    &__tabs-container {
      .nav-tabs {
        border-bottom: none;
        .nav-link {
          background-color: transparent;
          text-transform: uppercase;
          border: none;
          border-bottom: 1px solid transparent;
          font-family: "Montserrat";
          font-weight: 200;
          font-size: 28px;
          color: #b1b1b1;
          padding: 0 1rem 0.32rem 0;
          margin-right: 2rem;

          &.active {
            border-bottom-color: #fff;
            color: #fff;
          }
        }
      }
      .tab-pane {
        h3,
        h4 {
          font-family: "Montserrat";
          font-weight: 200;
          font-size: 28px;
          color: #ffffff;
        }
      }
    }
    &__social {
      margin-top: 3rem;
      h3 {
        font-family: "Montserrat";
        font-weight: 400;
        font-size: 26px;
        color: #fff;
        text-transform: uppercase;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          display: inline-block;
          padding-right: 1rem;
          a {
            font-size: 18px;
            transition: all 0.3s ease;
            color: #fff;
            &:hover {
              color: #ea4235;
            }
          }
        }
      }
    }
  }

  &__form-container {
    &__title {
      font-family: "Montserrat";
      font-weight: 400;
      font-size: 36px;
      color: #fff;
      text-transform: uppercase;
    }
    &__form {
      padding: 0.7rem;
      .custom-input {
        border: none;
        width: 100%;
        border-bottom: 1px solid #fff;
        background: transparent;
        font-family: "Montserrat";
        font-weight: 100;
        font-size: 20px;
        color: #ffffff;
        margin-bottom: 2rem;
        cursor: pointer;

        &:focus {
          outline: none !important;
          box-shadow: none;
        }
      }

      .center-btn {
        display: block;
        margin: 0 auto;
      }
    }
  }
}

/* Responsive */
@media (max-width: 992px) {
  .contact {
    &__info {
      &__tabs-container {
        .nav-tabs {
          .nav-link {
            font-size: 20px;
          }
        }
        .tab-pane {
          h3,
          h4 {
            font-size: 20px;
          }
        }
      }
      &__social {
        h3 {
          font-size: 20px;
        }
      }
    }
    &__form-container {
      &__title {
        font-size: 26px;
      }
      &__form {
        .custom-input {
          font-size: 16px;
          .center-btn {
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contact {
    &__form-container {
      &__title {
        margin-top: 2rem;
      }
      &__form {
        padding: 0;
      }
    }
  }
}
</style>
