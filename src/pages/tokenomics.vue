<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import { PieChart, BarChart, Info, ExternalLink, Coins, TrendingUp, Vote, Zap, Lock, Flame } from 'lucide-vue-next'

import imgBgPrimary from '../assets/tokenomics-bg.svg'
import imgHeroBg from '../assets/bg tokenomic.png'
import imgContainer from '../assets/tokenomics-decor.svg'

const tokenInfo = {
  totalSupply: '1,000,000,000',
  initialPrice: '$0.001',
  teamVesting: '24 Months',
  burnRate: '2%'
}

const utilities = [
  { title: 'In-Game Currency', desc: 'Use GBC to place bets, enter tournaments, and unlock features.' },
  { title: 'Staking Rewards', desc: 'Stake tokens to earn passive income with competitive APY.' },
  { title: 'Governance', desc: 'Vote on platform decisions and future development.' },
  { title: 'Deflationary', desc: '2% of transactions burned, reducing supply over time.' }
]
</script>

<template>
  <div class="bg-black min-h-screen text-white">
    <Navbar />

  
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <img :src="imgHeroBg" alt="hero-bg" class="w-full h-[380px] object-cover opacity-90" />
        <img :src="imgContainer" alt="decor" class="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] opacity-40 pointer-events-none" />
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div class="inline-flex items-center gap-2 bg-[#052d18] border border-[#054728] rounded-full px-4 py-2 mb-6">
          <Info class="w-4 h-4 text-[#05DF72]" />
          <span class="text-[#05DF72] text-sm font-medium">Token Economics</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold mb-4">GBC Tokenomics</h1>
        <p class="text-[#99a1af] max-w-3xl mx-auto text-base md:text-lg">
          Understand the economics behind GameBlackJack Coin on Polygon Network
        </p>
      </div>
    </section>

  
    <section class="max-w-6xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-center mb-12">Gobocoin (GBC) Information</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center bg-white/5">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center mb-6">
            <Zap class="w-7 h-7 text-black" />
          </div>
          <p class="text-sm text-[#99a1af] mb-3">Total Supply</p>
          <p class="text-3xl font-bold text-white mb-2">1,000,000,000</p>
          <p class="text-xs text-[#6a7282]">GBC Tokens</p>
        </div>

        
        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center bg-white/5">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center mb-6">
            <TrendingUp class="w-7 h-7 text-black" />
          </div>
          <p class="text-sm text-[#99a1af] mb-3">Initial Price</p>
          <p class="text-3xl font-bold text-white mb-2">$0.001</p>
          <p class="text-xs text-[#6a7282]">Per Token</p>
        </div>


        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center bg-white/5">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center mb-6">
            <Lock class="w-7 h-7 text-black" />
          </div>
          <p class="text-sm text-[#99a1af] mb-3">Team Vesting</p>
          <p class="text-3xl font-bold text-white mb-2">24 Months</p>
          <p class="text-xs text-[#6a7282]">Lock Period</p>
        </div>

       
        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center bg-white/5">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center mb-6">
            <Flame class="w-7 h-7 text-black" />
          </div>
          <p class="text-sm text-[#99a1af] mb-3">Burn Rate</p>
          <p class="text-3xl font-bold text-white mb-2">2%</p>
          <p class="text-xs text-[#6a7282]">Per Transaction</p>
        </div>
      </div>
    </section>

    
    <section class="max-w-6xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold mb-12 text-center">Token Utility</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
       

        <div class="border border-white/10 rounded-2xl p-6 flex flex-col bg-white/5">
          <div class="flex gap-4 items-start">
            <div class="flex-none w-11 h-11 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center shrink-0">
              <Coins class="w-6 h-6 text-black" />
            </div>
            <div class="grow">
              <h3 class="font-bold text-lg text-white mb-2">In-Game Currency</h3>
              <p class="text-sm leading-5 text-[#99a1af]">Use GBC to place bets, enter tournaments, and unlock features.</p>
            </div>
          </div>
        </div>

     
        <div class="border border-white/10 rounded-2xl p-6 flex flex-col bg-white/5">
          <div class="flex gap-4 items-start">
            <div class="flex-none w-11 h-11 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center shrink-0">
              <TrendingUp class="w-6 h-6 text-black" />
            </div>
            <div class="grow">
              <h3 class="font-bold text-lg text-white mb-2">Staking Rewards</h3>
              <p class="text-sm leading-5 text-[#99a1af]">Stake tokens to earn passive income with competitive APY.</p>
            </div>
          </div>
        </div>

       
      
        <div class="border border-white/10 rounded-2xl p-6 flex flex-col bg-white/5">
          <div class="flex gap-4 items-start">
            <div class="flex-none w-11 h-11 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center shrink-0">
              <Vote class="w-6 h-6 text-black" />
            </div>
            <div class="grow">
              <h3 class="font-bold text-lg text-white mb-2">Governance</h3>
              <p class="text-sm leading-5 text-[#99a1af]">Vote on platform decisions and future development.</p>
            </div>
          </div>
        </div>

        
        <div class="border border-white/10 rounded-2xl p-6 flex flex-col bg-white/5">
          <div class="flex gap-4 items-start">
            <div class="flex-none w-11 h-11 rounded-2xl bg-gradient-to-br from-[#05DF72] to-[#04B25B] flex items-center justify-center shrink-0">
              <Zap class="w-6 h-6 text-black" />
            </div>
            <div class="grow">
              <h3 class="font-bold text-lg text-white mb-2">Deflationary</h3>
              <p class="text-sm leading-5 text-[#99a1af]">2% of transactions burned, reducing supply over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="max-w-6xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold mb-8 text-center">GBC Token Details</h2>

      <div class="border border-white/10 rounded-2xl px-8 py-8 bg-white/5">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="border-b border-white/5 pb-6 flex items-center justify-between">
            <span class="text-sm text-[#99a1af]">Token Name</span>
            <span class="text-base text-white font-medium">Gobocoin</span>
          </div>
          <div class="border-b border-white/5 pb-6 flex items-center justify-between">
            <span class="text-sm text-[#99a1af]">Symbol</span>
            <span class="text-base text-white font-medium">GBC</span>
          </div>

          
          <div class="border-b border-white/5 pb-6 flex items-center justify-between">
            <span class="text-sm text-[#99a1af]">Network</span>
            <span class="text-base text-white font-medium">Polygon</span>
          </div>
          <div class="border-b border-white/5 pb-6 flex items-center justify-between">
            <span class="text-sm text-[#99a1af]">Standard</span>
            <span class="text-base text-white font-medium">ERC-20</span>
          </div>

         
          <div class="border-b border-white/5 pb-6 flex items-center justify-between">
            <span class="text-sm text-[#99a1af]">Total Supply</span>
            <span class="text-base text-white font-medium">1,000,000,000 GBC</span>
          </div>
          <div class="border-b border-white/5 pb-6 flex items-center justify-between">
            <span class="text-sm text-[#99a1af]">Contract</span>
            <span class="text-base text-white font-medium">0x1234...5678</span>
          </div>

          
          <div class="flex items-center justify-between">
            <span class="text-sm text-[#99a1af]">Current Price</span>
            <span class="text-base text-white font-medium">$0.01 USD</span>
          </div>
        </div>

        <div class="mt-8">
          <a href="https://www.coinbase.com/" target="_blank" rel="noopener" class="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-br from-[#05DF72] to-[#04B25B] text-black px-6 py-3 rounded-lg shadow-[0_10px_30px_rgba(4,178,91,0.18)]">
            <ExternalLink class="w-4 h-4" />
            <span class="font-medium">Buy GBC on DEX</span>
          </a>
        </div>
      </div>
    </section>    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .object-cover { object-fit: cover; }
}
</style>
