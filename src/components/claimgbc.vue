<script setup lang="ts">
// Komponen pop up klaim GBC bonus
import { ref } from 'vue'
import { Gift, CheckCircle, Loader2, Sparkles } from 'lucide-vue-next'

interface Props {
  isOpen: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'close'): void }>()

const isClaiming = ref(false)
const claimed = ref(false)

// claim bonus
const handleClaim = async () => {
  isClaiming.value = true
 
  setTimeout(() => {
    isClaiming.value = false
    claimed.value = true
    // Reset 
    setTimeout(() => {
      claimed.value = false
      emit('close')
    }, 3000)
  }, 2000)
}
</script>

<template>
  
  <div v-if="props.isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="emit('close')"></div>

    
    <div class="relative bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl max-w-[320px] w-full mx-2 p-2 md:max-w-[340px] md:p-3 lg:max-w-[360px] lg:p-4">
     
      <div class="text-center mb-4 mt-1">
        <h2 class="text-lg font-bold text-white mb-1">
          {{ claimed ? 'Selamat! 🎉' : 'Claim Your Welcome Bonus' }}
        </h2>
        <p class="text-gray-400 text-xs">
          {{ claimed ? 'GBC token berhasil dikreditkan' : 'Dapatkan 50 GBC gratis untuk memulai' }}
        </p>
      </div>

      <div class="py-4">
        
        <div v-if="!claimed" class="text-center space-y-4">
          
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-[#05DF72] blur-2xl opacity-30 animate-pulse"></div>
            <div class="relative bg-gradient-to-br from-[#05DF72] to-[#04B25B] p-4 rounded-2xl">
              <Gift class="w-10 h-10 text-black mx-auto" />
            </div>
          </div>

          <div class="space-y-1">
            <div class="text-2xl font-bold bg-gradient-to-r from-[#05DF72] to-[#04B25B] bg-clip-text text-transparent">
              50 GBC
            </div>
            <p class="text-gray-400 text-xs">Welcome bonus untuk pemain baru</p>
          </div>

          
          <div class="bg-white/5 border border-white/10 rounded-xl p-2 space-y-1 text-left">
            <p class="text-xs text-[#05DF72] font-medium">Syarat:</p>
            <ul class="text-[10px] text-gray-400 space-y-1">
              <li class="flex items-center gap-1.5">
                <div class="w-1 h-1 bg-[#05DF72] rounded-full"></div>
                Wallet harus terkoneksi
              </li>
              <li class="flex items-center gap-1.5">
                <div class="w-1 h-1 bg-[#05DF72] rounded-full"></div>
                Hanya untuk klaim pertama
              </li>
              <li class="flex items-center gap-1.5">
                <div class="w-1 h-1 bg-[#05DF72] rounded-full"></div>
                Berlaku di Polygon Network
              </li>
            </ul>
          </div>

         
          <button
            @click="handleClaim"
            :disabled="isClaiming"
            class="w-full bg-gradient-to-r from-[#05DF72] to-[#04B25B] hover:from-[#04B25B] hover:to-[#038644] text-black py-3 text-base shadow-[0_0_20px_rgba(5,223,114,0.3)] rounded-lg flex items-center justify-center gap-2 font-medium transition-all disabled:opacity-50"
          >
            <Loader2 v-if="isClaiming" class="w-4 h-4 animate-spin" />
            <Sparkles v-else class="w-4 h-4" />
            {{ isClaiming ? 'Claiming...' : 'Claim 50 GBC Now' }}
          </button>
        </div>

        
        <div v-else class="text-center space-y-3">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-[#05DF72] blur-lg opacity-40"></div>
            <div class="relative bg-gradient-to-br from-[#05DF72] to-[#04B25B] p-4 rounded-full">
              <CheckCircle class="w-10 h-10 text-black" />
            </div>
          </div>

          <div class="space-y-1">
            <h3 class="text-base font-bold text-[#05DF72]">Sukses!</h3>
            <p class="text-gray-400 text-xs">50 GBC telah ditambahkan ke wallet Anda</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
