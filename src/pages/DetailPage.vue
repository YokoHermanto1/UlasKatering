<template>
  <div class="q-pa-md">
    <h4>Detail untuk ID: {{ id }}</h4>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  computed: {
    id() {
      return this.$route.params.id; // Mengambil ID dari URL params
    }
  }
};
</script>

