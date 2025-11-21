
<script setup>

import { BadgeCheck, Wallet, ShieldCheck, Trophy } from 'lucide-vue-next';
</script>


<template>
  
  <section class="py-20 bg-black" id="features">
    <div class="max-w-5xl mx-auto px-6 flex flex-col gap-16">
      
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose MetaBlackJack?</h2>
        <p class="text-[#99a1af] text-lg md:text-xl max-w-2xl mx-auto">
          Experience the perfect blend of classic casino gaming and cutting-edge blockchain technology.
        </p>
      </div>

      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-start bg-white/5">
          <div class="bg-linear-to-b from-[#05df72] to-[#04b25b] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
            <BadgeCheck class="w-6 h-6 black" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Provably Fair</h3>
          <p class="text-[#99a1af] text-base">Every game is verified on-chain. Complete transparency and fairness guaranteed.</p>
        </div>

        
        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-start bg-white/5">
          <div class="bg-linear-to-b from-[#05df72] to-[#038644] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
            <Wallet class="w-6 h-6 black" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Instant Payouts</h3>
          <p class="text-[#99a1af] text-base">Win and withdraw immediately. Near-zero gas fees on Polygon Network.</p>
        </div>

        
        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-start bg-white/5">
          <div class="bg-linear-to-b from-[#06da70] to-[#038644] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
            <ShieldCheck class="w-6 h-6 black" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Audited &amp; Secure</h3>
          <p class="text-[#99a1af] text-base">Smart contracts audited by leading security firms. Your funds are safe.</p>
        </div>

        
        <div class="border border-white/10 rounded-2xl p-8 flex flex-col items-start bg-white/5">
          <div class="bg-linear-to-b from-[#05df72] to-[#04b25b] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
            <Trophy class="w-6 h-6 black" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Competitive Rewards</h3>
          <p class="text-[#99a1af] text-base">Earn GBC tokens, climb leaderboards, and win exclusive prizes.</p>
        </div>
      </div>
    </div>
  </section>
</template>
