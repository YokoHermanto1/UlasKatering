<template>
  <div class="footer-wrapper bg-brown">
    <div class="footer-content">
      <!-- Kiri: Logo dan Info -->
      <div class="footer-info">
        <div class="footer-logo">
          <img src="/icons/LogoCateringNoBGEdited.png" alt="Logo" />
          <span class="logo-text"><span class="orange">Ulas</span><span class="green">Katering</span></span>
        </div>
        <div class="tagline">Tempat berbagi pengalaman kuliner katering</div>
        <div class="alamat">
          Jl. Raya Kb. Jeruk No.27, Kemanggisan, Jakarta Barat, 11530<br />
          0804 169 6969 | info@ulaskatering.com
        </div>
      </div>

      <!-- Kanan: Form Email -->
      <div class="footer-email">
        <div class="judul">Informasi via Email</div>
        <div class="deskripsi">
          Masukkan email kamu untuk berlangganan informasi terbaru dari UlasKatering.
        </div>
        <div class="email-wrapper">
          <q-input
            dark
            v-model="email"
            placeholder="Masukkan Email"
            class="email-input"
            dense
            borderless
            hide-bottom-space
          >
            <template v-slot:append>
              <q-btn dense flat round icon="send" @click="subscribe" class="btn-send" />
            </template>
          </q-input>
        </div>
      </div>
    </div>

    <q-separator dark class="flex-center" style="max-width: 900px; margin:35px auto;" />

    <div class="footer-sosmed">
      <q-btn flat round icon="fab fa-instagram" size="md" />
      <q-btn flat round icon="fab fa-facebook" size="md" />
      <q-btn flat round icon="fab fa-tiktok" size="md" />
      <q-btn flat round icon="fab fa-whatsapp" size="md" />
    </div>

    <div class="copyright">
      © copyrights UlasKatering - {{ new Date().getFullYear() }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')

const subscribe = () => {
  if (email.value) {
    alert(`Berlangganan dengan email: ${email.value}`)
  } else {
    alert('Mohon masukkan email')
  }
}
</script>

<style scoped>
.footer-wrapper {
  color: white;
  padding: 2rem;
}
.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* atau center jika ingin semuanya rata tengah */
  gap: 2rem;
  max-width: 1160px; /* lebar maksimal konten */
  margin: 0 auto;     /* ini yang membuatnya berada di tengah */
}
.footer-info{
  flex: 1 1 300px;
}

.footer-email {
  flex: 1 1 160px;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer-logo img {
  height: 30px;
}
.logo-text {
  font-weight: bold;
  font-size: 1.25rem;
}
.green {
  color: #0a4a2d;
}
.orange {
  color: #d66c18;
}
.tagline {
  color: #d66c18;
  font-weight: bold;
  margin-top: 0.5rem;
}
.alamat {
  margin-top: 0.5rem;
}
.judul {
  font-weight: bold;
  font-size: 1.2rem;
}
.email-wrapper {
  margin-top: 0.5rem;
  max-width: 493px;
}
.email-input {
  background-color: #222;
  border-radius: 8px;
  padding-left: 10px;
}
.email-input input {
  outline: none !important;
  box-shadow: none !important;
}
.btn-send {
  margin-right: 4px;
  color: white;
}
.footer-sosmed {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}
.copyright {
  text-align: center;
  font-size: 0.9rem;
}
</style>

