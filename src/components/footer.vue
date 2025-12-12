<script setup lang="ts">

import { Twitter, MessageCircle, Send, Github } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();


const footerLinks = {
  product: [
    { name: 'howtoplay', path: '/howtoplay' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/metablackjack',
    icon: Twitter,
    color: 'hover:text-[#1DA1F2]'
  },
  { 
    name: 'Discord', 
    href: 'https://discord.gg/metablackjack',
    icon: MessageCircle,
    color: 'hover:text-[#5865F2]'
  },
  { 
    name: 'Telegram', 
    href: 'https://t.me/metablackjack',
    icon: Send,
    color: 'hover:text-[#26A5E4]'
  },
  { 
    name: 'GitHub', 
    icon: Github,
    color: 'hover:text-white'
  },
];
</script>

<template>
  
  <footer class="border-t border-white/10 bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
       
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="../assets/logo.png" alt="MetaBlackJack Logo" class="h-9 w-auto" />
          </div>
          <p class="text-sm text-gray-400 mb-4">
            Play-to-Earn BlackJack on Polygon Network. Fair, transparent, and decentralized.
          </p>
          <div class="flex gap-3">
           
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :class="`w-10 h-10 bg-white/5 hover:bg-[#05DF72]/20 border border-white/10 hover:border-[#05DF72]/30 rounded-lg flex items-center justify-center text-gray-400 transition-all ${social.color}`"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

    
        <div>
          <h3 class="text-sm font-semibold text-white mb-4">Product</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.product" :key="link.name">
              <RouterLink
                :to="link.path"
                class="text-sm text-gray-400 hover:text-[#05DF72] transition-colors"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 class="text-sm font-semibold text-white mb-4">Legal</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.legal" :key="link.name">
              <a
                :href="link.href"
                class="text-sm text-gray-400 hover:text-[#05DF72] transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div class="pt-8 border-t border-white/5">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-400">
            © {{ currentYear }} MetaBlackJack. All rights reserved.
          </p>
          <div class="flex items-center gap-2 text-sm text-gray-400">
            <span>Built on</span>
            <span class="text-[#8247E5] font-medium">Polygon</span>
            <span>•</span>
            <span>Powered by</span>
            <span class="text-[#05DF72] font-medium">GBC</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


