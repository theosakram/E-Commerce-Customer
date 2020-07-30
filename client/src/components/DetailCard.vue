<template>
  <div class="column">
    <div class="notification">
      <h1 class="title">{{ product.name }}</h1>
      <div class="columns is-multiline">
        <div class="column">
          <h1 class="has-text-centered has-text-weight-semibold subtitle">{{ product.sub_desc }}</h1>
          <p class="has-text-centered">{{ product.desc }}</p>

          <h2 class="subtitle" style="margin-top: 25px;">Category: {{ product.Category.name }}</h2>

          <h2 class="subtitle" style="margin-top:25px;">Stock: {{ product.stock }}</h2>

          <h2 class="subtitle" style="margin-top:25px;">Price: Rp {{ thisPrice }}</h2>

          <div class="buttons is-centered" style="margin-top: 25px;">
            <button
              class="button button-color has-text-white"
              @click.prevent="cart(product.name)"
            >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["product"],
  methods: {
    cart(value) {
      if (!localStorage.access_token) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You need to be logged in to user this feature"
        });
        this.$router.push("/login");
      } else {
        if (this.product.stock === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Product is not available"
          });
        } else {
          this.$store
            .dispatch("AddToCart", {
              user_id: localStorage.id,
              product_id: this.product.id
            })
            .then(data => {
              Swal.fire({
                icon: "success",
                title: "Yes",
                text: "Product added to cart successfully"
              });
            })
            .catch(err => {
              let msg = err.response.data.errors[0].msg;
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg
              });
            });
        }
      }
    },
    ...mapActions(["fetchProducts"])
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    thisPrice() {
      return numeral(this.product.price).format("000,00");
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
