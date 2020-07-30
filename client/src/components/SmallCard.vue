<template>
  <div class="column is-half">
    <div class="card hoper bottom">
      <div class="card-image">
        <figure class="text-center">
          <img :src="cart.Product.image_url" :alt="cart.Product.name" class="image" />
        </figure>
      </div>

      <div class="card-content">
        <p class="garmin">{{ cart.Product.name }}</p>
        <div class="columns">
          <div class="column">
            <!-- <p>Qty: {{ cart.quantity }}</p> -->

            <div class="buttons is-centered has-addons">
              <button @click.prevent="minusOne()" class="button">-</button>
              <button class="button">{{ cart.quantity }}</button>
              <button @click.prevent="plusOne()" class="button">+</button>
            </div>
          </div>
        </div>
        <div class="has-text-centered">
          <button class="button color-delete" @click.prevent="deleteFromCart(cart.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Axios from "axios";

export default {
  props: ["cart"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    maximum() {
      return this.cart.Product.stock;
    },
    ...mapGetters(["allCarts"])
  },
  methods: {
    deleteFromCart(value) {
      this.$store
        .dispatch("DeleteCart", value)
        .then(data => {
          this.FetchCarts(localStorage.id);
          Swal.fire({
            icon: "success",
            title: "Yes",
            text: "Product removed from cart successfully"
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
    },
    minusOne() {
      let payload = {
        id: this.cart.id,
        quantity: this.cart.quantity - 1
      };

      if (payload.quantity < 1) {
        Swal.fire({
          icon: "error",
          title: "No",
          text: "You can't buy less than one"
        });
      } else {
        this.$store
          .dispatch("EditQuantity", payload)
          .then(data => {
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
      }
    },
    plusOne() {
      let payload = {
        id: this.cart.id,
        quantity: this.cart.quantity + 1
      };
      if (payload.quantity > this.cart.Product.stock) {
        Swal.fire({
          icon: "error",
          title: "No",
          text: "You can't buy more than available stock"
        });
      } else {
        this.$store
          .dispatch("EditQuantity", payload)
          .then(data => {
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
      }
    },
    ...mapActions(["FetchCarts", "FetchProducts"])
  }
};
</script>

<style scoped>
.bottom {
  margin-bottom: 10px;
}

.image {
  width: 100%;
  height: 40vh !important;
  object-fit: cover;
  object-position: top;
  border-radius: 5px !important;
}

.card-image {
  height: 50% !important;
}

.card {
  height: 70vh !important;
  border-radius: 15px;
}

.card-content {
  height: 25%;
}

.garmin {
  margin-top: 35px;
  font-size: 15px;
  text-align: center;
}

.footer-garmin {
  margin-top: 35px;
  font-size: 15px;
}

.hoper:hover {
  -webkit-box-shadow: 2.5px 2.5px 2px 0 #00798c;
  box-shadow: 2.5px 2.5px 2px 0 #00798c;
  cursor: pointer;
}

.fixed-width {
  width: 55px;
}

.color-delete {
  border: 1px solid #1b998b;
}
</style>
