<template>
  <div>
    <NavbarProduct class="garmin" />
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="columns is-multiline">
            <SmallCard v-for="cart in allCarts" :key="cart.id" :cart="cart" />
          </div>
        </div>
        <div class="column">
          <Checkout v-for="cart in allCarts" :key="cart.id" :cart="cart" :all="allCarts" />
          <div class="column">
            <h4 style="text-align: center;">Total Price:</h4>
            <h1 class="title" style="text-align: center;">Rp. {{ newSum }}</h1>
            <div class="has-text-centered">
              <button @click.prevent="checkout()" class="button is-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarProduct from "../components/Navbar-Product";
import SmallCard from "../components/SmallCard";
import Checkout from "../components/Checkout";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NavbarProduct,
    SmallCard,
    Checkout
  },
  methods: {
    ...mapActions(["FetchCarts"]),
    checkout() {
      this.$store
        .dispatch("Checkout")
        .then(data => {
          Swal.fire({
            icon: "success",
            title: "Yes",
            text: "Items bought successfully"
          });
          this.FetchCarts(localStorage.id);
        })
        .catch(err => {
          let msg = err.response.data.errors[0].msg;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: msg
          });
        });
    },
    sum() {
      let temp = [];
      let quantity = this.allCarts.forEach(cart => {
        temp.push(cart.quantity * cart.Product.price);
      });
      let sum = temp.reduce((x, y) => x + y, 0);
      return numeral(sum).format("000,00");
    }
  },
  computed: {
    ...mapGetters(["allCarts"]),
    newSum() {
      return this.sum();
    }
  },
  created() {
    this.FetchCarts(localStorage.id);
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

.center {
  margin-left: 300px;
}
</style>
