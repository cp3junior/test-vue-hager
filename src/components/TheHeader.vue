<template>
  <b-navbar :sticky="true" toggleable="lg" type="light">
    <scrollactive active-class="active" :offset="80" :duration="800" bezier-easing-value=".5,0,.35,1">
      <b-navbar-brand href="#home" class="scrollactive-item">
        <img src="@/assets/logo.svg" alt="Logo" />
      </b-navbar-brand>
    </scrollactive>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <scrollactive active-class="active" :offset="80" :duration="800" bezier-easing-value=".5,0,.35,1">
        <b-navbar-nav>
          <b-nav-item href="#about" link-classes="scrollactive-item">ABOUT</b-nav-item>
          <b-nav-item href="#services" link-classes="scrollactive-item">SERVICES</b-nav-item>
          <b-nav-item href="#work" link-classes="scrollactive-item">WORKS</b-nav-item>
          <b-nav-item href="#blog" link-classes="scrollactive-item">BLOG</b-nav-item>
          <b-nav-item href="#contact" link-classes="scrollactive-item">CONTACT</b-nav-item>
        </b-navbar-nav>
      </scrollactive>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="social-icons" href="#"><font-awesome-icon :icon="['fab', 'twitter']"/></b-nav-item>
        <b-nav-item class="social-icons" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']"/></b-nav-item>
        <b-nav-item class="social-icons" href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
$red: #ea4235;

.navbar {
  padding: 0;
  background: #fff;

  .navbar-toggler {
    margin-right: 1rem;
  }

  .navbar-brand {
    padding: 0;
  }
  .navbar-nav {
    .nav-item {
      .nav-link {
        font-family: "Roboto";
        font-size: 14px;
        padding: 0.5rem 2rem;
        color: #000 !important;
        transition: 0.35s ease-in-out all;
        &:hover {
          color: $red !important;
        }
        &.active {
          color: $red !important;
        }

        &.social-icons {
          padding: 0.5rem 1rem !important;
        }
      }

      &.social-icons {
        .nav-link {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
}

/* Responsive */
@media (max-width: 992px) {
  .navbar {
    .navbar-brand {
      img {
        width: 60px;
        height: 60px;
      }
    }
    .navbar-nav {
      .nav-item {
        &.social-icons {
          .nav-link {
            padding: 0.5rem 2rem;
          }
        }
      }
    }
  }
}
</style>
