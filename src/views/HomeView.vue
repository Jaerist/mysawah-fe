<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'

const popularProducts = ref([
  { id: 1, title: 'Pupuk Organik Cair', price: 'Rp. 34.000', rating: '4,5', image: 'https://images.unsplash.com/photo-1585241936939-bf69b6a037b0?w=400&q=80' },
  { id: 2, title: 'Benih Padi Unggul', price: 'Rp. 130.000', rating: '4,5', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80' },
  { id: 3, title: 'Pestisida Alami,', price: 'Rp. 30.000', rating: '4,4', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&q=80' }
])
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <Navbar />

    <main>
      <section class="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
            Solusi Digital untuk <br> Pertanian Modern
          </h1>
          <p class="text-gray-600 text-base max-w-md leading-relaxed">
            Platform pertanian terintegrasi dengan teknologi AI, marketplace produk berkualitas, dan pengiriman cepat untuk mendukung petani indonesia
          </p>
          <div class="flex gap-4 pt-4">
            <button class="bg-[#598348] text-white px-8 py-3 rounded-md font-medium hover:bg-[#4a6d3c] transition">
              Mulai Sekarang
            </button>
            <button class="border border-gray-400 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
              Jelajahi Produk
            </button>
          </div>
        </div>
        <div class="flex-1 w-full">
          <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800" alt="Petani" class="w-full h-auto object-cover rounded-tl-[100px] rounded-br-[100px] shadow-lg" />
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 pb-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-200 pt-10">
          <div class="space-y-3">
            <div class="w-12 h-12 text-[#598348]">🏪</div>
            <h4 class="font-bold text-sm text-gray-900">Marketplace Pertanian</h4>
            <p class="text-xs text-gray-500">Produk berkualitas dari berbagai kategori</p>
          </div>
          <div class="space-y-3">
            <div class="w-12 h-12 text-[#598348]">🌱</div>
            <h4 class="font-bold text-sm text-gray-900">AI Assistant</h4>
            <p class="text-xs text-gray-500">Kontruksi tanaman dan rekomendasi cerdas</p>
          </div>
          <div class="space-y-3">
            <div class="w-12 h-12 text-[#598348]">🚚</div>
            <h4 class="font-bold text-sm text-gray-900">Pengiriman Cepat</h4>
            <p class="text-xs text-gray-500">Pengiriman aman dan tepat waktu</p>
          </div>
          <div class="space-y-3">
            <div class="w-12 h-12 text-[#598348]">👨‍🌾</div>
            <h4 class="font-bold text-sm text-gray-900">Untuk Petani Indonesia</h4>
            <p class="text-xs text-gray-500">Dukungan penuh untuk pertanian berkelanjutan</p>
          </div>
        </div>
      </section>

      <section class="bg-[#759f63] py-16 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div class="flex justify-between items-center mb-10">
            <div>
              <div class="bg-white px-3 py-1 rounded-full text-xs font-bold text-[#759f63] inline-flex items-center gap-1 mb-3">
                <span>🍃</span> MySawah
              </div>
              <h2 class="text-3xl font-bold text-white">Produk Populer</h2>
            </div>
            <div class="flex gap-2">
              <button class="w-10 h-10 border border-white/50 text-white rounded flex items-center justify-center hover:bg-white/20">&lt;</button>
              <button class="w-10 h-10 border border-white text-white rounded flex items-center justify-center hover:bg-white/20">&gt;</button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard v-for="product in popularProducts" :key="product.id" :item="product" />
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-24">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="flex-1 space-y-6">
            <div class="flex items-center gap-2 text-sm font-bold text-gray-800">
              <span class="w-5 h-5 bg-[#598348] text-white rounded-full flex items-center justify-center text-[10px]">🍃</span>
              MySawah
            </div>
            <h2 class="text-4xl font-bold text-gray-900">AI Assistant MySawah</h2>
            <p class="text-gray-600">Tanyakan masalah pertanian anda,<br>AI kami siap memberikan rekomendasi terbaik</p>
            <button class="bg-[#598348] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#4a6d3c]">Coba Sekarang</button>
          </div>
          
          <div class="flex-1 relative w-full h-300px">
             <div class="absolute right-0 top-0 bg-[#cce3c1] text-gray-800 p-4 rounded-xl rounded-tr-none text-sm max-w-xs shadow-sm border border-[#b5d5a7]">
               Hallo AI, Daun padi saya menguning, itu kenapa ya?
             </div>
             <div class="absolute left-10 bottom-0 bg-white border border-gray-200 text-gray-600 p-4 rounded-xl rounded-tl-none text-sm max-w-sm shadow-lg z-10">
               <p>Kemungkinan kekurangan unsur hara, [Nitrogen]. Coba kamu berikan pupuk urea dengan elemen yang tepat dan pastikan pengairan cukup.</p>
               <p class="mt-2 text-xs">Tindakan selanjutnya:</p>
               <ol class="list-decimal list-inside text-xs mt-1">
                 <li>Berikan pupuk urea</li>
                 <li>Pastikan irigasi cukup</li>
                 <li>Cek kondisi hama</li>
               </ol>
             </div>
             <div class="absolute left-0 top-10 w-28 h-28 bg-[#cce3c1] rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
               <img src="https://api.dicebear.com/7.x/bottts/svg?seed=mysawah" alt="AI Mascot" class="w-20 h-20" />
             </div>
          </div>
        </div>
      </section>

      <hr class="border-t-2 border-black max-w-7xl mx-auto" />

      <section class="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Tentang MySawah</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-16 text-sm">
          MySawah Hadir Untuk Membantu Petani Indonesia Mendapatkan Produk Terbaik Rekomendasi Cerdas, Dan Solusi Berbasis Teknologi Untuk Pertanian Yang Lebih Maju.
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div class="space-y-10 text-left">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#598348]">👨‍🌾</div>
              <div><h3 class="font-bold text-[#598348]">10.000 +</h3><p class="text-xs text-gray-500">Petani Terdaftar</p></div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#598348]">📦</div>
              <div><h3 class="font-bold text-[#598348]">500 +</h3><p class="text-xs text-gray-500">Produk Berkualitas</p></div>
            </div>
          </div>

          <div class="w-48 h-48 rounded-full border-2 border-black flex items-center justify-center p-4">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=MS&backgroundColor=ffffff&textColor=000000" class="w-full h-full rounded-full" />
          </div>

          <div class="space-y-10 text-left">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#598348]">👍</div>
              <div><h3 class="font-bold text-[#598348]">99 %</h3><p class="text-xs text-gray-500">Kepuasan Petani</p></div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#598348]">🇮🇩</div>
              <div><h3 class="font-bold text-[#598348]">Seluruh</h3><p class="text-xs text-gray-500">Indonesia</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 pb-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1592982537447-6f29fb2526b1?w=400" class="w-full h-64 object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400" class="w-full h-64 object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400" class="w-full h-64 object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400" class="w-full h-64 object-cover rounded-xl" />
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 pb-16">
        <div class="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-[#92c37e]">
          <div class="w-full md:w-5/12 h-64 md:h-auto">
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600" class="w-full h-full object-cover" />
          </div>
          <div class="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
            <div class="bg-white px-3 py-1 rounded-full text-xs font-bold text-[#759f63] inline-flex items-center gap-1 w-max mb-4">
              <span>🍃</span> MySawah
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-3">Hidup sehat dengan <br> produk segar</h2>
            <p class="text-gray-700 text-sm mb-8 max-w-md">
              Kami hadir membawa produk segar pilihan untuk mendukung hidup sehat Anda. Pilihan cerdas untuk hidup sehat dan penuh energi.
            </p>
            <div class="flex gap-10">
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center font-bold text-gray-900 bg-[#92c37e]">90%</div>
                <span class="text-xs font-semibold text-gray-800">Eco Farms<br>Worldwide</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center font-bold text-gray-900 bg-[#92c37e]">78%</div>
                <span class="text-xs font-semibold text-gray-800">Special<br>Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 pb-20">
        <div class="bg-[#485e3c] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200')] bg-cover mix-blend-overlay"></div>
          <div class="relative z-10 flex items-center gap-4">
             <div class="w-12 h-12 bg-[#cce3c1] rounded-full flex items-center justify-center text-2xl">🤝</div>
             <h2 class="text-2xl md:text-3xl font-bold text-white max-w-lg">
               We're popular leader in agriculture market globally
             </h2>
          </div>
          <button class="relative z-10 mt-6 md:mt-0 bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-100 flex items-center gap-2">
            Discover More ↗
          </button>
        </div>
      </section>

    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* =========================================
   CUSTOM CSS: MENYESUAIKAN DETAIL GAMBAR UI
   ========================================= */

/* 1. BENTUK GAMBAR HERO (Asimetris melengkung seperti daun) */
.hero-image-shape {
  border-radius: 40px 140px 40px 140px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* 2. EFEK HOVER KARTU FITUR (Marketplace, AI, dll) */
.feature-hover {
  transition: all 0.3s ease;
  border: 1px solid transparent;
}
.feature-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(89, 131, 72, 0.08);
  background-color: #ffffff;
  border-color: #e5e7eb;
  border-radius: 1rem;
}

/* 3. ANIMASI MELAYANG (Untuk AI Mascot & Balon Chat) */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float 4s ease-in-out 2s infinite; /* Delay agar gerakannya tidak berbarengan */
}

/* 4. BUNTUT BALON CHAT (Segitiga penunjuk arah percakapan) */
.chat-bubble-right {
  position: relative;
}
.chat-bubble-right::after {
  content: '';
  position: absolute;
  top: 15px;
  right: -10px;
  border-width: 10px 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent transparent #cce3c1;
}

.chat-bubble-left {
  position: relative;
}
.chat-bubble-left::before {
  content: '';
  position: absolute;
  top: 20px;
  left: -10px;
  border-width: 10px 10px 10px 0;
  border-style: solid;
  border-color: transparent #ffffff transparent transparent;
}

/* 5. LINGKARAN BERLAPIS TENTANG MYSAWAH (Logo Tengah) */
.about-circle-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 2px solid #1f2937; /* Garis luar solid */
  padding: 10px;
}
.about-circle-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px dashed #1f2937; /* Garis dalam putus-putus */
  padding: 12px;
}
.about-image-container {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 6. TOMBOL GRADASI (Efek menyala saat di-hover) */
.btn-gradient {
  background: linear-gradient(135deg, #598348 0%, #4a6d3c 100%);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(89, 131, 72, 0.4);
}
</style>