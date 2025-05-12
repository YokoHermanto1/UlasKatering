<template>
  <!-- Container utama -->
  <div class="q-px-lg q-mt-xl flex flex-center column">
    <!-- Search Bar -->
    <div class="full-width" style="max-width: 550px;">
      <q-input
        v-model="searchQuery"
        placeholder="Cari katering"
        outlined
        rounded

      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
  <!-- Block 1 -->
  <div class="q-ma-lg q-pa-md justify-center">
    <div
      class="row items-center justify-center q-gutter-md"
      style="max-width: 1210px; margin: auto; margin-bottom: 30px;"
    >
      <div class="text-subtitle1 text-weight-medium">5 Tempat Katering Terenak</div>
      <router-link
        to="/tempat-baru"
        class="text-grey text-caption q-ml-auto"
        style="text-decoration: none;margin-right: 30px"
      >
        Lihat lainnya<q-icon name="chevron_right" />
      </router-link>
    </div>

    <div class="row justify-center q-gutter-md">
      <KateringCard v-for="(item, i) in items" :key="i" :item="item" :linkable="true" />
    </div>
  </div>
  <!-- Block 2 -->
  <div class="q-ma-lg q-pa-md justify-center">
    <div
      class="row items-center justify-center q-gutter-md"
      style="max-width: 1210px; margin: auto; margin-bottom: 30px; "
    >
      <div class="text-subtitle1 text-weight-medium">5 Tempat Katering Tebaru</div>
      <router-link
        to="/tempat-baru"
        class="text-grey text-caption q-ml-auto"
        style="text-decoration: none; margin-right: 30px;"
      >
        Lihat lainnya<q-icon name="chevron_right" />
      </router-link>
    </div>

    <div class="row justify-center q-gutter-md q-mb-xl">
     <KateringCard v-for="(item1, i) in items1" :key="i" :item="item1" :linkable="true" />
    </div>
  </div>
  <!-- Footer -->
  <FooterComponent />
</template>

<script setup>
import { ref } from 'vue'

// Reactive state untuk pencarian
const searchQuery = ref('')
import KateringCard from '../layouts/KateringCard.vue'
import FooterComponent from '../layouts/FooterComponent.vue'

const items = [
  {
    id:1,
    name: ' Akasya Catering & Co',
    location: 'Jakarta Selatan',
    category: 'Katering',
    rating: '4.4',
    image: '../src/assets/AkasyaCatering.jpeg',
  },
  {
    name: 'Bungkushin',
    location: 'Riau',
    category: 'Jepang',
    rating: '4.0',
    image: 'https://linkgambar2.jpg',
  },
  {
    name: 'Sancha',
    location: 'Gading Serpong',
    category: 'Minuman',
    rating: '4.0',
    image: 'https://linkgambar3.jpg',
  },
  {
    name: 'Sancha',
    location: 'Gading Serpong',
    category: 'Minuman',
    rating: '4.0',
    image: 'https://linkgambar3.jpg',
  },
  {
    name: 'Sancha',
    location: 'Gading Serpong',
    category: 'Minuman',
    rating: '4.0',
    image: 'https://linkgambar3.jpg',
  },
]
const items1 = [
  {
    id: 1,
    name: 'Lala Catering',
    location: 'Jakarta Timur',
    category: 'Katering',
    rating: '4.9',
    image: '../src/assets/LalaCatering.png',
  },
  {
    id: 2,
    name: "Rasa Nyonya Catering",
    location: 'Jakarta Selatan',
    category: 'Katering',
    rating: '5.0',
    image: '../src/assets/RasaNyonya.jpeg',
  },
  {
    id: 3,
    name: ' Adhika Catering',
    location: 'Jakarta Pusat',
    category: 'Katering',
    rating: '4.5',
    image: '../src/assets/AdhikaCatering.jpeg',
  },
  {
    name: 'Plataran Catering Services',
    location: 'Jakarta Selatan',
    category: 'Katering',
    rating: '5.0',
    image: '../src/assets/PlataranCatering.jpeg',
  },
  {
    name: 'Mealfit',
    location: 'Jakarta Barat',
    category: 'Katering',
    rating: '4.8',
    image: '../src/assets/MealFit.jpeg',
  },
]
</script>

<style scoped></style>
