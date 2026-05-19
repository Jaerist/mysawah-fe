<script setup>
// Menerima data produk dari halaman utama (HomeView.vue)
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative border border-gray-100 group cursor-pointer">
    
    <div class="w-full h-48 bg-gray-100 rounded-xl overflow-hidden mb-4">
      <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>

    <div class="space-y-1">
      <h3 class="text-lg font-bold text-gray-900">{{ item.title }}</h3>
      <p class="text-emerald-700 font-semibold text-lg">{{ item.price }}</p>
    </div>

    <div class="flex items-center justify-between mt-4">
      <div class="flex items-center gap-1 text-sm font-medium text-gray-700">
        <span class="text-yellow-400 text-lg">★</span>
        {{ item.rating }}
      </div>
      
      <button class="border border-gray-300 text-gray-600 px-4 py-1.5 rounded-lg text-sm font-medium hover:border-emerald-600 hover:text-emerald-700 transition mr-8">
        Lihat Detail
      </button>
    </div>

    <button class="absolute bottom-4 right-4 w-10 h-10 bg-[#e5db5c] hover:bg-[#d4c94b] rounded-full flex items-center justify-center shadow-md transition-colors">
      <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </button>
    
  </div>
</template>