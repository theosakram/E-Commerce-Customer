<template>
  <div class="container">
    <NavbarProduct />
    <div class="columns">
      <div class="column">
        <div class="notifiation">
          <h5
            class="title"
            v-for="item in history"
            :key="item.id"
          >{{ item.Product.name }} x {{ item.quantity }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarProduct from "../components/Navbar-Product";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NavbarProduct
  },
  methods: {
    ...mapActions(["History"])
  },
  computed: {
    ...mapGetters(["history"])
  },
  created() {
    this.History();
    if (this.$route.path !== "/") {
      if (!localStorage.access_token) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style>
.button-color {
  color: #00798c;
  background: #00798c;
}
</style>
