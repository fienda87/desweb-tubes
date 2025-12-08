<template>
  <div class="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
    <div class="space-y-6">
    
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-xl font-semibold text-white mb-1">
            Referral Generator
          </h3>
          <p class="text-sm text-gray-400">
            Create your unique link and earn 10% commission
          </p>
        </div>
        <button
          @click="generateReferralCode"
          class="border border-white/10 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors"
        >
          <RefreshCw class="w-4 h-4" />
          Generate
        </button>
      </div>

      <div v-if="referralCode" class="space-y-4">
        
        <div class="bg-black/40 border border-white/10 rounded-xl p-4">
          <p class="text-xs text-gray-400 mb-2">Your Referral Code</p>
          <p class="text-lg font-mono text-[#05DF72]">{{ referralCode }}</p>
        </div>

       
        <div class="bg-black/40 border border-white/10 rounded-xl p-4">
          <p class="text-xs text-gray-400 mb-3">Your Referral Link</p>
          <div class="flex gap-2">
            <div class="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
              <LinkIcon class="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                :value="`https://metablackjack.io/ref/${referralCode}`"
                readonly
                class="flex-1 bg-transparent text-sm text-gray-400 outline-none"
              />
            </div>
            <button
              @click="copyToClipboard"
              class="bg-[#05DF72]/10 hover:bg-[#05DF72]/20 border border-[#05DF72]/20 text-[#05DF72] px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Check v-if="copied" class="w-4 h-4" />
              <Copy v-else class="w-4 h-4" />
              {{ copied ? 'Copied' : 'Copy' }}
            </button>
          </div>
        </div>

        
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-[#05DF72]/10 border border-[#05DF72]/20 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-1">Commission</p>
            <p class="text-2xl font-bold text-[#05DF72]">10%</p>
          </div>
          <div class="bg-[#05DF72]/10 border border-[#05DF72]/20 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-1">Bonus</p>
            <p class="text-2xl font-bold text-[#05DF72]">25 GBC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Copy, Check, RefreshCw, Link as LinkIcon } from 'lucide-vue-next';

const referralCode = ref('');
const copied = ref(false);

const generateReferralCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'MBJ-';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  referralCode.value = code;
  copied.value = false;
};

const copyToClipboard = () => {
  const fullLink = `https://metablackjack.io/ref/${referralCode.value}`;
  navigator.clipboard.writeText(fullLink);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};
</script>
