<script setup>
import { ref } from 'vue'
// Impor 3 komponen utama yang tetap dipisahkan
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'

// Data Dummy untuk Looping ProductCard (Sesuai Gambar)
const popularProducts = ref([
  {
    id: 1,
    title: 'Pupuk Organik Cair',
    price: 'Rp. 34.000',
    rating: 4.5,
    image: '/images/pupuk-cair.png' // Sesuaikan path gambar Anda
  },
  {
    id: 2,
    title: 'Benih Padi Unggul',
    price: 'Rp. 130.000',
    rating: 4.5,
    image: '/images/benih-padi.png'
  },
  {
    id: 3,
    title: 'Pestisida Alami',
    price: 'Rp. 30.000',
    rating: 4.4,
    image: '/images/pestisida.png'
  }
])
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800 antialiased">
    <Navbar />

    <main>
      
      <section class="relative max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1 space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Solusi Digital untuk <br>
            <span class="text-emerald-700">Pertanian Modern</span>
          </h1>
          <p class="text-gray-600 text-lg max-w-xl">
            Platform pertanian terintegrasi dengan teknologi AI, marketplace produk berkualitas, dan pengiriman cepat untuk mendukung petani Indonesia.
          </p>
          <div class="flex gap-4">
            <button class="bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-emerald-800 transition">
              Mulai Sekarang
            </button>
            <button class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
              Jelajah Produk
            </button>
          </div>
        </div>
        <div class="flex-1 relative">
          <img src="/images/hero-farmer.png" alt="Petani Modern" class="w-full rounded-3xl object-cover shadow-xl" />
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-8 border-b border-gray-100">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
            <div class="text-emerald-600 text-3xl">🏪</div>
            <div>
              <h4 class="font-bold text-gray-900">Marketplace Pertanian</h4>
              <p class="text-sm text-gray-500">Produk berkualitas dari berbagai kategori</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
            <div class="text-emerald-600 text-3xl">🌱</div>
            <div>
              <h4 class="font-bold text-gray-900">AI Assistant</h4>
              <p class="text-sm text-gray-500">Kontruksi tanaman dan rekomendasi cerdas</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
            <div class="text-emerald-600 text-3xl">🚚</div>
            <div>
              <h4 class="font-bold text-gray-900">Pengiriman Cepat</h4>
              <p class="text-sm text-gray-500">Pengiriman aman dan tepat waktu</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
            <div class="text-emerald-600 text-3xl">👨‍🌾</div>
            <div>
              <h4 class="font-bold text-gray-900">Untuk Petani Indonesia</h4>
              <p class="text-sm text-gray-500">Dukungan penuh untuk pertanian berkelanjutan</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-emerald-50/50 py-16">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex justify-between items-center mb-10">
            <div>
              <span class="text-sm font-semibold text-emerald-700 tracking-wider uppercase block mb-1">MySawah</span>
              <h2 class="text-3xl font-bold text-gray-900">Produk Populer</h2>
            </div>
            <div class="flex gap-2">
              <button class="w-10 h-10 border border-emerald-700 text-emerald-700 rounded-lg flex items-center justify-center hover:bg-emerald-700 hover:text-white transition">&lt;</button>
              <button class="w-10 h-10 bg-emerald-700 text-white rounded-lg flex items-center justify-center hover:bg-emerald-800 transition">&gt;</button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              v-for="product in popularProducts" 
              :key="product.id" 
              :item="product" 
            />
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 space-y-6">
          <span class="text-sm font-semibold text-emerald-700 uppercase tracking-wider block">MySawah</span>
          <h2 class="text-4xl font-bold text-gray-900">AI Assistant MySawah</h2>
          <p class="text-gray-600 text-lg">
            Tanyakan masalah pertanian anda, <br> Al kami siap memberikan rekomendasi terbaik.
          </p>
          <button class="bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-emerald-800 transition">
            Coba Sekarang
          </button>
        </div>
        
        <div class="flex-1 bg-gray-50 p-8 rounded-3xl relative border border-gray-100 flex flex-col gap-4">
          <div class="self-end bg-emerald-100 text-emerald-900 p-4 rounded-2xl rounded-tr-none max-w-sm text-sm shadow-sm">
            Hallo AI, Daun padi saya menguning, itu kenapa ya? 👨‍🌾
          </div>
          <div class="flex justify-center my-4">
            <div class="w-32 h-32 bg-emerald-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white overflow-hidden">
              <img src="/images/ai-avatar.png" alt="AI Mascot" class="w-24 h-24 object-contain" />
            </div>
          </div>
          <div class="self-start bg-white text-gray-700 p-4 rounded-2xl rounded-tl-none max-w-md text-sm shadow-sm border border-gray-100">
            <p class="font-semibold text-emerald-700 mb-1">Kemungkinan kekurangan unsur hara, [Nitrogen]. Coba kamu berikan pupuk urea dengan elemen yang tepat dan pastikan pengairan cukup.</p>
            <p class="mt-2 text-xs text-gray-500 font-medium">Tindakan selanjutnya:</p>
            <ol class="list-decimal list-inside text-xs text-gray-600 mt-1 space-y-1">
              <li>Berikan pupuk urea</li>
              <li>Pastikan irigasi cukup</li>
              <li>Cek kondisi hama</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Tentang MySawah</h2>
          <p class="text-gray-500 max-w-2xl mx-auto mb-16">
            MySawah hadir untuk membantu Petani Indonesia mendapatkan produk terbaik, rekomendasi cerdas, dan solusi berbasis teknologi untuk pertanian yang lebih maju.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8 max-w-4xl mx-auto">
            <div class="space-y-12 text-right">
              <div class="flex items-center justify-end gap-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">10.000 +</h3>
                  <p class="text-sm text-gray-500">Petani Terdaftar</p>
                </div>
                <div class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold">✓</div>
              </div>
              <div class="flex items-center justify-end gap-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">500 +</h3>
                  <p class="text-sm text-gray-500">Produk Berkualitas</p>
                </div>
                <div class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold">✓</div>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="w-48 h-48 rounded-full border-4 border-dashed border-emerald-700 p-4 flex items-center justify-center bg-white shadow-inner">
                <img src="/images/logo-bulat.png" alt="MySawah Circular Logo" class="w-full h-full object-contain" />
              </div>
            </div>

            <div class="space-y-12 text-left">
              <div class="flex items-center justify-start gap-4">
                <div class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">99 %</h3>
                  <p class="text-sm text-gray-500">Kepuasan Petani</p>
                </div>
              </div>
              <div class="flex items-center justify-start gap-4">
                <div class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold">✓</div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">Seluruh</h3>
                  <p class="text-sm text-gray-500">Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/gallery-1.png" alt="Activity 1" class="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition" />
          <img src="/images/gallery-2.png" alt="Activity 2" class="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition" />
          <img src="/images/gallery-3.png" alt="Activity 3" class="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition" />
          <img src="/images/gallery-4.png" alt="Activity 4" class="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition" />
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 bg-emerald-100 rounded-3xl overflow-hidden shadow-md">
          <div class="h-64 md:h-auto relative">
            <img src="/images/healthy-farmer.png" alt="Farmer" class="w-full h-full object-cover" />
          </div>
          <div class="p-8 md:p-12 flex flex-col justify-center bg-emerald-800 text-white space-y-6">
            <span class="bg-white/20 text-white text-xs px-3 py-1 rounded-full w-max">MySawah</span>
            <h2 class="text-3xl font-bold">Hidup sehat dengan produk segar</h2>
            <p class="text-emerald-100/80 text-sm">
              Kami hadir membawa produk segar pilihan untuk mendukung hidup sehat Anda. Pilihan cerdas untuk hidup sehat dan penuh energi.
            </p>
            <div class="flex gap-8 pt-4">
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center font-bold text-sm">90%</div>
                <span class="text-xs text-emerald-100 font-medium">Eco Farms<br>Worldwide</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-full border-4 border-emerald-400 flex items-center justify-center font-bold text-sm text-emerald-300">78%</div>
                <span class="text-xs text-emerald-100 font-medium">Special<br>Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-6">
        <div class="relative rounded-3xl bg-emerald-950 p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
          <div class="absolute inset-0 opacity-10 bg-[url('/images/wheat-pattern.png')] bg-cover"></div>
          
          <div class="relative z-10 space-y-2 text-center md:text-left">
            <div class="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-lg mb-2 mx-auto md:mx-0">🌾</div>
            <h2 class="text-2xl md:text-3xl font-bold max-w-xl leading-snug">
              We're popular leader in agriculture market globally
            </h2>
          </div>
          <div class="relative z-10">
            <button class="bg-white text-emerald-950 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-emerald-50 transition text-sm flex items-center gap-2">
              Discover More ↗
            </button>
          </div>
        </div>
      </section>

    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Anda bisa menambahkan animasi custom murni atau transisi spesifik di sini jika dibutuhkan */
</style>