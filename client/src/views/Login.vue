<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="section">
          <div class="container grid-4">
            <div class="columns">
              <div class="column">
                <div class="notification rounded">
                  <h1 class="subtitle">Login</h1>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="email" placeholder="Email" v-model="email" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input
                        class="input"
                        type="password"
                        placeholder="Password"
                        v-model="password"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <div class="columns">
                      <div class="column grid">
                        <p class="control">
                          <a to="/dashboard" class="button color" @click.prevent="login()">Login</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("Login", {
          email: this.email,
          password: this.password
        })
        .then(data => {
          this.$router.push("/");
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
  created() {
    if (localStorage.access_token) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.color {
  color: #1b998b;
}

.rounded {
  border-radius: 5px;
  background: lightgrey;
}
</style>
