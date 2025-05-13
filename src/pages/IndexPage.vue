<template>
  <!-- Container utama -->
  <div class="q-px-lg q-mt-xl flex flex-center column">
    <!-- Search Bar -->
    <div class="full-width" style="max-width: 550px">
      <q-input v-model="searchQuery" placeholder="Cari katering" outlined rounded>
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
      style="max-width: 1210px; margin: auto; margin-bottom: 30px"
    >
      <div class="text-subtitle1 text-weight-medium">5 Tempat Katering Terenak</div>
      <router-link
        to="/tempat-baru"
        class="text-grey text-caption q-ml-auto"
        style="text-decoration: none; margin-right: 30px"
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
      style="max-width: 1210px; margin: auto; margin-bottom: 30px"
    >
      <div class="text-subtitle1 text-weight-medium">5 Tempat Katering Tebaru</div>
      <router-link
        to="/tempat-baru"
        class="text-grey text-caption q-ml-auto"
        style="text-decoration: none; margin-right: 30px"
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
    id: 1,
    name: ' Akasya Catering & Co',
    location: 'Jl. Bangka XI No.67-69, Pela Mampang, Jakarta Selatan',
    category: 'Katering',
    rating: '4.4',
    image: '../src/assets/AkasyaCatering.jpeg',
  },
  {
    id: 2,
    name: 'Umara Catering',
    location: ' Jl. Intan RSPP No. 23B, Jakarta Selatan',
    category: 'Katering',
    rating: '4.7',
    image: '../src/assets/UmaraCatering.png',
  },
  {
    id: 3,
    name: 'Puspa Catering',
    location: 'Jl. Pancoran Timur No. 21, Jakarta Selatan',
    category: 'Katering',
    rating: '4.5',
    image: '../src/assets/PuspaCatering.jpeg',
  },
  {
    id: 4,
    name: 'Dapur Bu Sastro',
    location: 'Jl. Minangkabau Timur No.13, Pasar Manggis, Kecamatan Setiabudi, Jakarta Selatan',
    category: 'Katering',
    rating: '4.8',
    image: '../src/assets/DapurBuSastro.jpeg',
  },
  {
    id: 5,
    name: 'Alfabet Catering',
    location: 'Jl. Minangkabau Barat No.24, Pasar Manggis, Jakarta Selatan',
    category: 'Katering',
    rating: '4.8',
    image: '../src/assets/AlfabetCatering.png',
  },
]
const items1 = [
  {
    id: 6,
    name: 'Lala Catering',
    location: 'Jl. SDN 01 No.124 Pondok Ranggon, Jakarta Timur',
    category: 'Katering',
    rating: '4.9',
    image: '../src/assets/LalaCatering.png',
  },
  {
    id: 7,
    name: 'Rasa Nyonya Catering',
    location: 'Jl. Kelapa Dua Raya No.19 F Blok N 3, Kelapa Dua, Tangerang Regency',
    category: 'Katering',
    rating: '3.9',
    image: '../src/assets/RasaNyonya.jpeg',
  },
  {
    id: 8,
    name: ' Adhika Catering',
    location: 'Jl. Zamrud Raya No. 842, Sumur Batu, Jakarta Pusat',
    category: 'Katering',
    rating: '4.5',
    image: '../src/assets/AdhikaCatering.jpeg',
  },
  {
    id: 9,
    name: 'Plataran Catering Services',
    location: ' Jl. Brawijaya Raya No. 4, Kebayoran Baru, Jakarta Selatan',
    category: 'Katering',
    rating: '5.0',
    image: '../src/assets/PlataranCatering.jpeg',
  },
  {
    id: 10,
    name: 'Mealfit',
    location: 'Jl. Pembangunan III No. 4, Jakarta Barat',
    category: 'Katering',
    rating: '4.8',
    image: '../src/assets/MealFit.jpeg',
  },
]
</script>

<style scoped></style>
