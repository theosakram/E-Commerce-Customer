<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img class="garmin" :src="product.image_url" :alt="product.name" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.garmin {
  border-radius: 5px;
}

.garmin:hover {
  cursor: pointer;
}
</style>
