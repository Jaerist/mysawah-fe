<script setup>
// Kosong untuk saat ini, nantinya bisa diisi logika state untuk Search atau Cart
</script>

<template>
  <nav class="bg-white px-6 py-4 md:px-12 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
    
    <div class="flex items-center gap-2 cursor-pointer">
      <svg class="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5.5 5.5A.75.75 0 016 5.53l1.28.53a.75.75 0 11-.56 1.38l-1.28-.53A.75.75 0 015.5 5.5zM14.5 5.5a.75.75 0 01.17 1.41l-1.28.53a.75.75 0 11-.56-1.38l1.28-.53a.75.75 0 01.39-.03z" clip-rule="evenodd" /></svg>
      <span class="text-xl font-bold text-gray-800">MySawah</span>
    </div>

    <ul class="hidden md:flex items-center gap-8 text-gray-600 font-medium text-sm">
      <li><a href="#" class="text-emerald-700 font-bold">Beranda</a></li>
      <li><a href="#" class="hover:text-emerald-700 transition">Produk</a></li>
      <li><a href="#" class="hover:text-emerald-700 transition">AI Assistant</a></li>
      <li><a href="#" class="hover:text-emerald-700 transition">Tentang kami</a></li>
    </ul>

    <div class="flex items-center gap-4">
      <div class="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-1.5 bg-gray-50 focus-within:border-emerald-500 focus-within:bg-white transition">
        <input type="text" placeholder="Ketik Pesan..." class="bg-transparent outline-none text-sm w-40 placeholder-gray-400" />
        <button class="text-gray-500 hover:text-emerald-600">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </div>
      
      <button class="text-gray-600 hover:text-emerald-700 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      </button>
      
      <button class="text-gray-600 hover:text-emerald-700 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </button>
    </div>

  </nav>
</template>