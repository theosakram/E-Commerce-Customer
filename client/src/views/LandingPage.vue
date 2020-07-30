<template>
  <section class="hero is-fullheight grey">
    <NavbarProduct />
    <div class="hero-body garmin-bot">
      <div class="container has-text-centered">
        <p class="one has-text-weight-bold color">Cyanide with Rice</p>
        <p class="two color">a Weeb Store</p>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import NavbarProduct from "../components/Navbar-Product";
import Footer from "../components/Footer";
export default {
  components: {
    NavbarProduct,
    Footer
  }
};
</script>

<style>
.cursive {
  font-family: "Satisfy", cursive;
}

.one {
  font-size: 50px;
}

.two {
  font-size: 30px;
}

.color {
  color: #1b998b !important;
}

.garmin-bot {
  margin-bottom: 50px;
}
</style>
