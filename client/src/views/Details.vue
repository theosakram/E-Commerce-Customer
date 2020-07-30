<template>
  <div>
    <NavbarProduct class="garmin" />
    <div class="container">
      <div class="columns">
        <BigCard :product="thisProduct" />
        <DetailCard :product="thisProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarProduct from "../components/Navbar-Product";
import BigCard from "../components/BigCard";
import DetailCard from "../components/DetailCard";
import { mapGetters } from "vuex";
export default {
  components: {
    NavbarProduct,
    BigCard,
    DetailCard
  },
  computed: {
    thisProduct() {
      return this.$store.getters.oneProduct(this.$route.params.product);
    }
  },
  created() {
    if (this.$route.path !== "/") {
      if (!localStorage.access_token) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style>
.garmin {
  margin-bottom: 25px;
}
</style>
