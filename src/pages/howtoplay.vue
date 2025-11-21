<script setup>


import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import { Link2, Wallet, Gamepad2, Trophy } from 'lucide-vue-next';
import heroBg from '../assets/bg primary.png'; 


const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Connect Your Wallet',
    description: 'Link your MetaMask or WalletConnect wallet. Ensure you\'re on Polygon Network for low fees.'
  },
  {
    number: '02',
    icon: Wallet,
    title: 'Get GBC Tokens',
    description: 'Claim your free 50 GBC welcome bonus or purchase tokens to start playing.'
  },
  {
    number: '03',
    icon: Gamepad2,
    title: 'Place Your Bet',
    description: 'Choose your bet amount and play BlackJack. Beat the dealer to win 2x your bet!'
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Win & Withdraw',
    description: 'Withdraw your winnings instantly to your wallet. No waiting, no limits.'
  }
]

// aturan permainan
const rules = [
  'The goal is to beat the dealer by getting closer to 21 without going over',
  'Number cards count as face value, face cards count as 10, Aces count as 1 or 11',
  'Hit to draw another card, Stand to keep your current hand',
  'BlackJack (21 with first two cards) pays 2.5x your bet',
  'Going over 21 means you bust and lose your bet',
  'Dealer must hit until their hand totals 17 or higher'
]
</script>

<template>
  <div class="bg-black w-full text-white" data-name="How To Play page">
    
    <Navbar />
    <section class="relative pt-32 pb-16 overflow-hidden mt-20" data-name="cover">
    
      <div class="absolute inset-0 z-0">
        <img :src="heroBg" alt="Hero Cover" class="w-full h-full object-cover object-center" />
      </div>

      <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span class="text-green-500 text-sm font-medium">Quick Start Guide</span>
        </div>

      
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">How to Play</h1>

        <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Learn the basics and start winning in minutes. Simple, fair, and fun.
        </p>
      </div>
    </section>

    
    <section class="py-20 px-6" data-name="Section">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-white mb-16">Get Started in 4 Easy Steps</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div v-for="(step, index) in steps" :key="index" class="border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition relative overflow-hidden group">
            
            <div class="absolute top-6 right-6 text-6xl font-bold text-white/5">{{ step.number }}</div>

            
            <div class="bg-linear-to-b from-green-400 to-green-600 rounded-2xl w-14 h-14 flex items-center justify-center mb-6 relative z-10">
              <component :is="step.icon" class="w-7 h-7 text-white" />
            </div>

            
            <h3 class="text-xl font-bold text-white mb-3 relative z-10">{{ step.title }}</h3>
            <p class="text-gray-400 text-sm relative z-10">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section class="py-20 px-6 border-t border-white/5" data-name="Section">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-white mb-12">Game Rules</h2>

        <div class="border border-white/10 rounded-2xl p-8">
          <div class="space-y-4">
            <div v-for="(rule, index) in rules" :key="index" class="flex gap-4 items-start">
              
              <div class="bg-linear-to-b from-green-400 to-green-600 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                <span class="text-black font-bold text-sm">{{ index + 1 }}</span>
              </div>

              
              <p class="text-gray-300 text-base leading-relaxed pt-1">{{ rule }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <Footer />
  </div>
</template>

<style scoped>

* {
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}
</style>
