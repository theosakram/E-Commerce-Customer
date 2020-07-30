<template>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <router-link to="/" class="navbar-item cursive" style="margin-right:75px;">CWR</router-link>
          <router-link
            :to="`/category/${category.name}`"
            class="navbar-item this-hover fixed-width"
            v-for="category in allCategories"
            :key="category.id"
            :class="{ 'is-bold is-uppercase': category.name === newCategory }"
          >{{ category.name }}</router-link>
        </div>

        <div id="navbarMenuHeroB" class="navbar-menu" v-if="token">
          <div class="dropdown is-hoverable navbar-end">
            <div class="dropdown-trigger" style="margin-top: 15px;">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                <span>{{ name }}</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <a @click.prevent="toCart()" class="is-bold">Cart</a>
                </div>
                <div class="dropdown-item">
                  <router-link to="/history" class="is-bold">Transactions</router-link>
                </div>
                <hr class="dropdown-divider" />
                <div class="dropdown-item">
                  <a class="is-bold" @click.prevent="logout()">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="navbarMenuHeroB" class="navbar-menu" v-else>
          <div class="navbar-end">
            <router-link to="/login" class="navbar-item">Login</router-link>

            <router-link to="/register" class="navbar-item">Register</router-link>

            <a
              href="https://github.com/theosakram/Ecommerce-Customer"
              target="_"
              class="navbar-item"
            >Documentation</a>
          </div>
        </div>

        <!-- aasdasd -->
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      token: localStorage.access_token,
      name: localStorage.name
    };
  },
  computed: {
    ...mapGetters(["allCategories"]),
    newCategory() {
      return this.$route.params.category;
    }
  },
  methods: {
    logout() {
      if (this.$route.path !== "/") {
        localStorage.clear();
        this.$router.push("/");
      } else {
        this.token = "";
        // this.$router.push("/login");
        localStorage.clear();
      }
    },
    ...mapActions(["fetchCategories"]),
    toCart() {
      this.$router.push("/cart");
    }
  },
  created() {
    this.fetchCategories(this.newCategory);
  }
};
</script>

<style scoped>
.is-bold {
  color: #1b998b !important;
}

.dropdown-item:hover {
  background-color: #1b998b !important;
}

.dropdown-item:hover a {
  color: white !important;
}

.cursive {
  font-family: "Satisfy", cursive;
}

.dropdown-hover:hover {
  box-shadow: none;
}

.fixed-width {
  width: 100px;
  justify-content: center;
}
</style>
