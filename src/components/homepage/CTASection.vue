

<script setup>
import { ArrowDownToLine, ArrowRight } from 'lucide-vue-next';
import bgCta from '../../assets/bg tokenomic.png';

// Fungsi scroll ke hero homepage
const scrollToHero = () => {
  const hero = document.querySelector('[data-name="hero"]')
  if (hero) {
    hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  
  <section class="relative py-20 bg-black border-t border-white/5 overflow-hidden">
  
    <div class="absolute inset-0 pointer-events-none select-none">
      <img :src="bgCta" alt="bg" class="absolute left-1/2 top-0 -translate-x-1/2 w-screen max-w-none opacity-60" style="z-index:1;" />
    </div>
    <div class="max-w-3xl mx-auto px-6 text-center relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Winning?</h2>
      <p class="text-[#99a1af] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Join thousands of players earning real rewards on the blockchain. Your next big win awaits.
      </p>
  
      <button
        class="relative flex items-center justify-center gap-2 bg-linear-to-b from-[#05df72] to-[#04b25b] text-black font-semibold text-lg px-8 py-3 rounded-lg shadow-lg shadow-green-500/30 mx-auto hover:from-green-400 hover:to-green-700 transition"
        style="min-width:220px;"
        @click="scrollToHero"
      >
        <ArrowDownToLine class="w-5 h-5 mr-2" />
        Get Started Now
        <ArrowRight class="w-5 h-5 ml-2" />
      </button>
    </div>
  </section>
</template>

