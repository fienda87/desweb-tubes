<script setup lang="ts">

import { ref } from 'vue';
import { Wallet, ChevronDown, LogOut } from 'lucide-vue-next';


const walletAddress = ref<string | null>(null);
const isConnecting = ref(false);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// koneksi wallet
const connectWallet = async (walletType: 'metamask' | 'walletconnect') => {
  isConnecting.value = true;
  isDropdownOpen.value = false;
  
  setTimeout(() => {
    const mockAddress = `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`;
    walletAddress.value = mockAddress;
    isConnecting.value = false;
  }, 1500);
};

const disconnectWallet = () => {
  walletAddress.value = null;
  isDropdownOpen.value = false;
};
</script>

<template>
  
  <div class="relative">
   
    <button
      v-if="walletAddress"
      @click="toggleDropdown"
      class="bg-[#05DF72]/10 hover:bg-[#05DF72]/20 border border-[#05DF72]/20 text-[#05DF72] hover:text-[#05DF72] px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
    >
      <Wallet class="w-4 h-4" />
      {{ walletAddress }}
      <ChevronDown class="w-4 h-4" />
    </button>

    <button
      v-else
      @click="toggleDropdown"
      :disabled="isConnecting"
      class="bg-gradient-to-r from-[#05DF72] to-[#04B25B] hover:from-[#04B25B] hover:to-[#038644] text-black shadow-[0_0_20px_rgba(5,223,114,0.3)] px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
    >
      <Wallet class="w-4 h-4" />
      {{ isConnecting ? 'Connecting...' : 'Connect Wallet' }}
    </button>

    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg overflow-hidden z-50"
    >
      
      <div v-if="walletAddress">
        <button
          @click="disconnectWallet"
          class="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer flex items-center gap-2 transition-colors"
        >
          <LogOut class="w-4 h-4" />
          Disconnect
        </button>
      </div>
     
      <div v-else>
        <button
          @click="connectWallet('metamask')"
          class="w-full text-left px-4 py-2 text-[#05DF72] hover:text-[#05DF72] hover:bg-[#05DF72]/10 cursor-pointer flex items-center gap-2 transition-colors"
        >
          <Wallet class="w-4 h-4" />
          MetaMask
        </button>
        <button
          @click="connectWallet('walletconnect')"
          class="w-full text-left px-4 py-2 text-[#05DF72] hover:text-[#05DF72] hover:bg-[#05DF72]/10 cursor-pointer flex items-center gap-2 transition-colors"
        >
          <Wallet class="w-4 h-4" />
          WalletConnect
        </button>
      </div>
    </div>
  </div>
</template>


