<template>
  <section class="hero is-fullheight">
    <NavbarProduct :catNow="newCategory" />
    <section class="section">
      <div class="columns" style="overflow: auto;">
        <Category></Category>
      </div>
    </section>
  </section>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Category from "@/components/Category.vue";
import NavbarProduct from "@/components/Navbar-Product.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    newCategory() {
      return this.$route.params.category;
    },
    ...mapGetters(["allProducts"])
  },
  components: {
    Sidebar,
    Breadcrumb,
    Category,
    NavbarProduct
  },
  created() {
    if (this.$route.path !== "/") {
      if (!localStorage.access_token) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style></style>
