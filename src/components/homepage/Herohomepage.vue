<script setup>


import { ArrowDownToLine, CheckCircle } from 'lucide-vue-next';

import { ref } from 'vue'
import Claimgbc from '../claimgbc.vue'


const showClaimPopup = ref(false)

</script>
<template>
  
  <section
    class="relative overflow-hidden pt-32 pb-32 mt-20"
    data-name="hero"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full left-1/3 top-20 opacity-50"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="flex justify-center mb-8">
        <div
          class="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2"
        >
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span class="text-green-500 text-sm font-medium">
            Now Live on Polygon
          </span>
        </div>
      </div>

      
      <h1
        class="text-center text-5xl md:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto"
      >The Future of
        <span
          class="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent"
        >
          Web3 BlackJack
        </span>
      </h1>

      
      <p
        class="text-center text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
      >
        Experience decentralized BlackJack on Polygon. Play, Earn, and Truly own your rewards.
      </p>

      
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
      >


        
        <button
          class="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-lg shadow transition text-base"
          @click="showClaimPopup = true"
        >
          <ArrowDownToLine class="w-5 h-5" />
          Claim 1000 GBC Free
        </button>
  
  <Claimgbc :isOpen="showClaimPopup" @close="showClaimPopup = false" />
      </div>

      <div
        class="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-200 mb-8"
      >

        <div class="flex items-center gap-2">
          
          <CheckCircle class="w-5 h-5 text-green-500" />
          Audited Smart Contracts
        </div>

        <div class="flex items-center gap-2">
          <CheckCircle class="w-5 h-5 text-green-500" />
          Instant Withdrawals
        </div>

        <div class="flex items-center gap-2">
          <CheckCircle class="w-5 h-5 text-green-500" />
          Provably Fair
        </div>
      </div>
    </div>
  </section>
</template>
