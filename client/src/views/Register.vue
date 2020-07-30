<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="section">
          <div class="container grid-4">
            <div class="columns">
              <div class="column">
                <div class="notification rounded">
                  <h1 class="subtitle">Register</h1>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="text" placeholder="Username" v-model="name" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
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
                          <a
                            to="/dashboard"
                            class="button color"
                            @click.prevent="register()"
                          >Register</a>
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
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("Register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(data => {
          this.$router.push("/login");
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.statusText
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
