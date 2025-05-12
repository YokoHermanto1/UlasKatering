<!-- components/KateringCard.vue -->
<template>
  <q-card
    class="my-card q-ma-sm"
    flat
    bordered
    @click="handleClick"
    style="width: 220px; border-bottom: 2px solid #f44336"

  >
    <q-img :src="item.image" style="height: 140px"  class="cursor-pointer">
        <q-card-section class="absolute-full bg-transparent" />
      <div v-if="item.rating" class="absolute-bottom-right bg-red text-white text-caption q-pa-xs">
        {{ item.rating }}
      </div>
    </q-img>

    <q-card-section>
      <div class="text-subtitle2 text-weight-bold">{{ item.name }}</div>
      <div class="text-caption text-grey">{{ item.location }} | {{ item.category }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
    linkable: { type: Boolean, default: false },
  },
  methods: {
    handleClick() {
      if (this.linkable) {
        this.$router.push({ name: 'Detail Page', params: { id: this.item.id } })
      }
    }
  }
}


</script>

<style scoped>
.my-card {
  border-radius: 10px;
  transition: box-shadow 0.2s;
}
.my-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
