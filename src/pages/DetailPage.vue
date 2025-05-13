<template>
  <div class="q-pa-lg q-gutter-md">
    <div class="row flex-center" style="max-width: 1000px; margin: 35px auto">
      <!-- Kolom Gambar -->
      <div class="col-12 col-md-4 flex flex-center q-mb-md q-pl-md">
        <q-img
          :src="katering?.image"
          :alt="katering?.name"
          style="width: 100%; max-width: 300px; border: 2px solid #000; border-radius: 6px"
          contain
        />
      </div>

      <!-- Kolom Konten -->
      <div class="col-12 col-md-7 q-mx-sm q-px-md">
        <div class="text-h6 text-bold q-mb-sm">{{ katering?.name }}</div>

        <!-- Rating Aspek -->
        <div class="row q-col-gutter-sm q-mb-md justify-start">
          <div
            v-for="(rating, index) in ratingAspek"
            :key="index"
            class="col-auto"
            style="min-width: 110px"
          >
            <div
              style="
                border-radius: 8px;
                background: white;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                overflow: hidden;
              "
            >
              <div
                :style="`background-color: ${getRatingColor(rating.score)}; color: white; text-align: center; font-weight: bold; padding: 4px;`"
              >
                {{ rating.label }}
              </div>
              <div
                :style="`color: ${getRatingColor(rating.score)}; text-align: center; font-size: 1.3rem; font-weight: bold; padding: 6px 0;`"
              >
                {{ rating.score }}
              </div>
            </div>
          </div>
        </div>

        <!-- Info Alamat -->
        <div class="q-mb-md">
          <div class="text-subtitle1 text-bold">Alamat</div>
          <div class="text-body2">{{ katering?.location }}</div>
        </div>

        <!-- Info Harga -->
        <div class="q-mb-md">
          <div class="text-subtitle1 text-bold">Range Harga</div>
          <div class="text-body2">
            {{ katering?.priceRange || 'Rp25.000 - Rp75.000' }}
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="row justify-center q-gutter-sm">
          <q-btn
            label="TULIS REVIEW"
            color="red"
            icon="rate_review"
            size="md"
            no-caps
            unelevated
            style="min-width: 270px"
          />
          <q-btn
            label="RATING"
            color="orange"
            icon="star"
            size="md"
            no-caps
            unelevated
            style="min-width: 270px"
          />
        </div>
      </div>
    </div>
    <q-separator class="flex-center" style="max-width: 1300px; margin: 35px auto" />
  </div>
</template>

<script>
import { kateringList } from '../data/KateringData'

export default {
  name: 'DetailPage',
  computed: {
    id() {
      return parseInt(this.$route.params.id)
    },
    katering() {
      return kateringList.find((item) => item.id === this.id)
    },
  },
  data() {
    return {
      ratingAspek: [
        { label: 'Rasa', score: 4.7 },
        { label: 'Suasana', score: 3.7 },
        { label: 'Harga', score: 3.7 },
        { label: 'Services', score: 3.6 },
        { label: 'Bersih', score: 1.0 },
      ],
    }
  },
  methods: {
    getRatingColor(score) {
      if (score >= 4)
        return '#4CAF50' // Hijau
      else if (score >= 3)
        return '#FFA000' // Oranye
      else return '#F44336' // Merah
    },
  },
}
</script>
