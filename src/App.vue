<template>
  <div>
    <TheHeader />
    <Hero />
    <About />
    <Services />
    <Works />
    <Contact />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    Hero,
    About,
    Services,
    Works,
    Contact,
    TheFooter
  }
};
</script>

<style lang="scss">
/* general styles and overrides */
$white: #fff;
$red: #d43d40;

.row {
  margin: 0;
}

a:focus-visible,
button:focus-visible,
button:focus,
button:active {
  outline: none !important;
  box-shadow: none;
}

.button {
  border: 1px solid $white;
  border-radius: 30px;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 22px;
  color: $white;
  background: transparent;
  padding: 0.5rem 2rem;
  transition: all ease 0.2s;

  &.white-outline {
    &:hover {
      background: $white;
      color: $red;
    }
  }

  &.red {
    background: $red;
    border-color: transparent;
    color: $white;
    &:hover {
      background: $white;
      color: $red;
    }
  }

  &.red-outline {
    background: transparent;
    color: $red;
    border-color: $red;
    &:hover {
      background: $red;
      color: $white;
    }
  }

  &.white-icon {
    background: $white;
    font-size: 16px;
    color: $red;
    text-transform: uppercase;
    margin: 3rem 0;
    svg {
      margin-right: 10px;
    }
    &:hover {
      background: transparent;
      color: white;
      border-color: $red;
    }
  }
}
</style>
