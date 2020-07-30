<template>
  <div class="column">
    <h5 class="title" style="text-align: center;">{{ cart.Product.name }} x {{ cart.quantity }}</h5>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["cart"],
  methods: {
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
