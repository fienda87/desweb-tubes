
<script setup>

import { ref } from 'vue'
import gameplayImg from '../../assets/gameplay.png'
import exchangeImg from '../../assets/exchange.png'
import kalahImg from '../../assets/kalah.png'
import riwayatImg from '../../assets/riwayat.png'

// slide gambar
const currentSlide = ref(1)
const images = [
  gameplayImg,
  exchangeImg,
  kalahImg,
  riwayatImg
];
const goToSlide = (n) => { currentSlide.value = n }
const nextSlide = () => { currentSlide.value = (currentSlide.value % images.length) + 1 }
const prevSlide = () => { currentSlide.value = currentSlide.value === 1 ? images.length : currentSlide.value - 1 }
//carosul
</script>

<template>
  <section
    class="relative border-t border-white/5 py-20"
    data-name="gameplay"
  >
    <div class="max-w-6xl mx-auto px-6">
    
      <div class="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8 mx-auto">
        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
        <span class="text-green-500 text-sm font-medium">Live Gameplay</span>
      </div>

  
      <h2 class="text-4xl font-bold text-center text-white mb-4">Experience the Game</h2>
      <p class="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        See MetaBlackJack in action. Stunning graphics, smooth gameplay, and instant rewards.
      </p>

      
      <div class="relative border border-white/10 rounded-3xl overflow-hidden bg-black/50">
        <div class="aspect-video bg-linear-to-b from-black/50 via-green-500/5 to-black/50 flex items-center justify-center">
          <img
            :src="images[currentSlide - 1]"
            alt="Gameplay preview"
            class="object-contain w-full h-full"
          />
        </div>

      
        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border border-white/10 hover:border-white/20 rounded-full p-3 transition"
        >
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
          </svg>
        </button>

      
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border border-white/10 hover:border-white/20 rounded-full p-3 transition"
        >
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
          </svg>
        </button>

        
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <button
            v-for="n in 4"
            :key="n"
            @click="goToSlide(n)"
            :class="['w-8 h-2 rounded-full transition', currentSlide === n ? 'bg-green-500' : 'bg-white/20 hover:bg-white/30']"
          >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
