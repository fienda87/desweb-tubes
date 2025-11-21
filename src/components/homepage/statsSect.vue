<script setup>

import { Users, BarChart2, Gamepad2, Gift } from 'lucide-vue-next';
</script>
<template>
  
  <section
    class="relative border-t border-white/5 py-20"
    data-name="showcase"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition">
          <div class="flex justify-between items-start mb-6">
            <div class="bg-green-500/10 border border-green-500/20 rounded-2xl p-3">
             
              <Users class="w-6 h-6 text-green-500" />
            </div>
            <span class="text-green-500 text-sm font-semibold">+23%</span>
          </div>
          <p class="text-gray-400 text-sm mb-2">Active Players</p>
          <p class="text-3xl font-bold text-white">12.4K+</p>
        </div>

        
        <div class="border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition">
          <div class="flex justify-between items-start mb-6">
            <div class="bg-green-500/10 border border-green-500/20 rounded-2xl p-3">
            
              <BarChart2 class="w-6 h-6 text-green-500" />
            </div>
            <span class="text-green-500 text-sm font-semibold">+45%</span>
          </div>
          <p class="text-gray-400 text-sm mb-2">Total Volume</p>
          <p class="text-3xl font-bold text-white">$2.5M</p>
        </div>

        <div class="border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition">
          <div class="flex justify-between items-start mb-6">
            <div class="bg-green-500/10 border border-green-500/20 rounded-2xl p-3">
             
              <Gamepad2 class="w-6 h-6 text-green-500" />
            </div>
            <span class="text-green-500 text-sm font-semibold">+67%</span>
          </div>
          <p class="text-gray-400 text-sm mb-2">Games Played</p>
          <p class="text-3xl font-bold text-white">156K</p>
        </div>

        
        <div class="border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition">
          <div class="flex justify-between items-start mb-6">
            <div class="bg-green-500/10 border border-green-500/20 rounded-2xl p-3">
              
              <Gift class="w-6 h-6 text-green-500" />
            </div>
            <span class="text-green-500 text-sm font-semibold">+89%</span>
          </div>
          <p class="text-gray-400 text-sm mb-2">Rewards Paid</p>
          <p class="text-3xl font-bold text-white">$1.2M</p>
        </div>
      </div>
    </div>
  </section>
</template>
