
<script setup>

import connectwalletbutton from './connectwalletbutton.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'
const route = useRoute()


const mobileOpen = ref(false)
</script>

<template>

  <nav class="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur">
    <div class="max-w-6xl mx-auto px-6 flex items-center h-16">
      
      <router-link to="/" class="flex items-center gap-2 mr-6 min-w-[120px] justify-start">
        <img src="../assets/logo.png" alt="Logo" class="h-10 w-auto" />
      </router-link>

      
      <div class="hidden md:flex grow justify-center gap-10 items-center">
        <router-link


          to="/"
          :class="[
            'transition',
            route.path === '/' ? 'text-[#05DF72] font-bold' : 'text-white/80 hover:text-white']"

        >Home</router-link>
        <router-link
          to="/howtoplay"
          :class="[
            'transition',
            route.path === '/howtoplay' ? 'text-[#05DF72] font-bold' : 'text-white/80 hover:text-white']"

        >How to Play</router-link>
        <a
          href="#gameplay"
          :class="[
            'transition',
            route.hash === '#gameplay' ? 'text-[#05DF72] font-bold' : 'text-white/80 hover:text-white']"


        >Gameplay</a>
        <a
          href="#features"
          :class="[
            'transition',
            route.hash === '#features' ? 'text-[#05DF72] font-bold' : 'text-white/80 hover:text-white']"

        >Features</a>
        <a
          href="#about"
          :class="[
            'transition',
            route.hash === '#about' ? 'text-[#05DF72] font-bold' : 'text-white/80 hover:text-white']"
        >About</a>
      </div>

      <!-- Hamburger icon (mobile) -->
      <button
        class="md:hidden ml-auto flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#05DF72]"
        @click="mobileOpen = !mobileOpen"
        aria-label="Open menu"
      >
        <Menu class="w-7 h-7 text-[#05DF72]" />
      </button>

      
      <div class="ml-6 min-w-[120px] justify-end hidden md:flex">
        <connectwalletbutton />
      </div>
    </div>

    
    <div
      v-if="mobileOpen"
      class="md:hidden absolute top-16 left-0 w-full z-50"
    >



      <ul class="bg-black/95 border-t border-white/10 rounded-b-2xl shadow-2xl divide-y divide-white/10">
        <li>
          <router-link
            to="/"
            class="block px-6 py-4 text-base font-semibold text-center transition"
            :class="route.path === '/' ? 'text-[#05DF72] bg-white/5' : 'text-white/80 hover:bg-white/10'"
            @click="mobileOpen = false"


          >Home</router-link>
        </li>
        <li>
          <router-link
            to="/howtoplay"
            class="block px-6 py-4 text-base font-semibold text-center transition"
            :class="route.path === '/howtoplay' ? 'text-[#05DF72] bg-white/5' : 'text-white/80 hover:bg-white/10'"
            @click="mobileOpen = false"
          >How to Play</router-link>
        </li>
        <li>

          <a
            href="#gameplay"
            class="block px-6 py-4 text-base font-semibold text-center text-white/80 hover:bg-white/10 transition"
            @click="mobileOpen = false"
          >Gameplay</a>
        </li>
        <li>

          <a
            href="#features"
            class="block px-6 py-4 text-base font-semibold text-center text-white/80 hover:bg-white/10 transition"
            @click="mobileOpen = false"
          >Features</a>
        </li>

        <li>
          <a
            href="#about"
            class="block px-6 py-4 text-base font-semibold text-center text-white/80 hover:bg-white/10 transition"
            @click="mobileOpen = false"
          >About</a>
        </li>


        <li>
          <div class="px-6 py-4 flex justify-center bg-black/90">
            <connectwalletbutton />
          </div>
        </li>

      </ul>
    </div>
  </nav>
</template>
