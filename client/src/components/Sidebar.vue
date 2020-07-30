<template>
  <div class="column is-one-fifth">
    <aside class="menu">
      <p class="menu-label ">
        Product
      </p>
      <ul class="menu-list ">
        <li v-for="category in allCategories" :key="category.id">
          <router-link
            :to="`/category/${category.name}`"
            class="this-hover"
            :class="{ 'is-active': category.name === catNow }"
          >
            {{ category.name }}
          </router-link>
        </li>
      </ul>

      <p class="menu-label ">
        Actions
      </p>
      <ul class="menu-list">
        <li>
          <a class="this-hover " @click.prevent="logout()">Logout</a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["catNow"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allCategories"]),
    newCategory() {
      return this.$route.params.category;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    ...mapActions(["fetchCategories"]),
    changePage() {
      this.$router.push({
        name: "Category",
        params: {
          id: `${this.category.id}`,
          name: `${this.category.name}`,
          category: `${this.category.name}`,
        },
      });
    },
  },
  created() {
    this.fetchCategories(this.newCategory);
  },
};
</script>

<style></style>
