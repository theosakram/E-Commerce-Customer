<template>
  <div class="column is-one-quarter" v-if="product.Category.name === category">
    <div class="card hoper bottom" @click.prevent="toPage()">
      <div class="card-image">
        <figure class="text-center">
          <img :src="product.image_url" :alt="product.name" class="image" />
        </figure>
      </div>

      <div class="card-content">
        <p class="garmin">{{ product.name }}</p>
      </div>

      <footer class="card-footer futer">
        <p class="futer-2">{{ product.series }}</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Axios from "axios";

export default {
  props: ["product", "category"],
  methods: {
    ...mapActions(["fetchProducts"]),
    toPage() {
      this.$router.push({
        name: "Details",
        params: {
          product: `${this.product.name}`,
        },
      });
    },
  },
};
</script>

<style scoped>
.bottom {
  margin-bottom: 10px;
}

.image {
  width: 100%;
  height: 35vh !important;
  object-fit: cover;
  object-position: top;
  border-radius: 5px !important;
}

.card-image {
  height: 50% !important;
}

.card {
  height: 50vh !important;
  border-radius: 15px;
}

.card-content {
  height: 25%;
}

.garmin {
  margin-top: 55px;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.futer {
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
}

.futer-2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
}

.hoper:hover {
  -webkit-box-shadow: 2.5px 2.5px 2px 0 #00798c;
  box-shadow: 2.5px 2.5px 2px 0 #00798c;
  cursor: pointer;
}
</style>
