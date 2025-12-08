<script setup lang="ts">
import { ref, computed } from 'vue'
import { Trophy, Medal, Award, TrendingUp, Crown } from 'lucide-vue-next'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

interface LeaderboardEntry {
  rank: number
  address: string
  wins: number
  earnings: string
  streak: number
}

const activeTab = ref('Weekly')

const tabs = ['Daily', 'Weekly', 'All Time']

const leaderboardDatasets: Record<string, LeaderboardEntry[]> = {
  Daily: [
    { rank: 1, address: '0x9a2f...3e1b', wins: 45, earnings: '3,250', streak: 12 },
    { rank: 2, address: '0x5d8c...7f4a', wins: 38, earnings: '2,890', streak: 8 },
    { rank: 3, address: '0x1e4b...9c2d', wins: 32, earnings: '2,410', streak: 5 },
    { rank: 4, address: '0x7f3a...6d8e', wins: 28, earnings: '2,120', streak: 6 },
    { rank: 5, address: '0x3c9d...4b7f', wins: 24, earnings: '1,890', streak: 4 },
  ],
  Weekly: [
    { rank: 1, address: '0x742d...5f8a', wins: 156, earnings: '12,450', streak: 8 },
    { rank: 2, address: '0x8c3e...92b1', wins: 143, earnings: '11,230', streak: 12 },
    { rank: 3, address: '0x1a5d...3c4f', wins: 128, earnings: '9,875', streak: 5 },
    { rank: 4, address: '0x9f2b...7e6d', wins: 115, earnings: '8,640', streak: 7 },
    { rank: 5, address: '0x4e8a...1d2c', wins: 102, earnings: '7,920', streak: 4 },
  ],
  'All Time': [
    { rank: 1, address: '0x2b7e...8a3c', wins: 2847, earnings: '284,700', streak: 23 },
    { rank: 2, address: '0x6f1d...5e9a', wins: 2563, earnings: '256,300', streak: 18 },
    { rank: 3, address: '0x4a9c...2f7b', wins: 2341, earnings: '234,100', streak: 15 },
    { rank: 4, address: '0x8e5f...1c4d', wins: 2198, earnings: '219,800', streak: 20 },
    { rank: 5, address: '0xb3d2...7a6e', wins: 2075, earnings: '207,500', streak: 11 },
  ],
}

const leaderboardData = computed(() => leaderboardDatasets[activeTab.value])
</script>

<template>
  <div class="pt-20 bg-black min-h-screen text-white">
    <Navbar />
    
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-[#05DF72]/5 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,223,114,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 bg-[#05DF72]/10 border border-[#05DF72]/20 rounded-full px-4 py-2 mb-8">
          <Crown class="w-4 h-4 text-[#05DF72]" />
          <span class="text-sm text-[#05DF72] font-medium">Top Players</span>
        </div>
        
        <h1 class="text-5xl font-bold text-white mb-4">
          Leaderboard
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Compete with the best players worldwide. Top performers win exclusive rewards.
        </p>
      </div>
    </section>

   
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      
          
          <div class="md:order-1 order-2">
            <div class="bg-gradient-to-br from-white/10 to-white/[0.02] border-2 border-gray-500/30 rounded-2xl p-6 text-center">
              <div class="flex justify-center mb-4">
                <div class="p-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl">
                  <Medal class="w-8 h-8 text-black" />
                </div>
              </div>
              <p class="text-sm text-gray-400 mb-2">2nd Place</p>
              <p class="text-xl font-mono text-white mb-4">{{ leaderboardData[1].address }}</p>
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/5 rounded-lg p-3">
                  <p class="text-xs text-gray-400">Wins</p>
                  <p class="text-lg text-[#05DF72]">{{ leaderboardData[1].wins }}</p>
                </div>
                <div class="bg-white/5 rounded-lg p-3">
                  <p class="text-xs text-gray-400">GBC</p>
                  <p class="text-lg text-[#05DF72]">{{ leaderboardData[1].earnings }}</p>
                </div>
              </div>
            </div>
          </div>

          
          <div class="md:order-2 order-1">
            <div class="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl p-6 text-center md:scale-110 shadow-[0_0_40px_rgba(234,179,8,0.2)]">
              <div class="flex justify-center mb-4">
                <div class="relative">
                  <div class="absolute inset-0 bg-yellow-400 blur-xl opacity-50 animate-pulse"></div>
                  <div class="relative p-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl">
                    <Trophy class="w-10 h-10 text-black" />
                  </div>
                </div>
              </div>
              <p class="text-sm text-yellow-400 mb-2 flex items-center justify-center gap-1">
                <Crown class="w-4 h-4" />
                1st Place
              </p>
              <p class="text-2xl font-mono text-white mb-4">{{ leaderboardData[0].address }}</p>
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/10 rounded-lg p-3">
                  <p class="text-xs text-yellow-400">Wins</p>
                  <p class="text-xl text-white">{{ leaderboardData[0].wins }}</p>
                </div>
                <div class="bg-white/10 rounded-lg p-3">
                  <p class="text-xs text-yellow-400">GBC</p>
                  <p class="text-xl text-white">{{ leaderboardData[0].earnings }}</p>
                </div>
              </div>
            </div>
          </div>

          
          <div class="md:order-3 order-3">
            <div class="bg-gradient-to-br from-white/10 to-white/[0.02] border-2 border-orange-500/30 rounded-2xl p-6 text-center">
              <div class="flex justify-center mb-4">
                <div class="p-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl">
                  <Award class="w-8 h-8 text-black" />
                </div>
              </div>
              <p class="text-sm text-gray-400 mb-2">3rd Place</p>
              <p class="text-xl font-mono text-white mb-4">{{ leaderboardData[2].address }}</p>
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/5 rounded-lg p-3">
                  <p class="text-xs text-gray-400">Wins</p>
                  <p class="text-lg text-[#05DF72]">{{ leaderboardData[2].wins }}</p>
                </div>
                <div class="bg-white/5 rounded-lg p-3">
                  <p class="text-xs text-gray-400">GBC</p>
                  <p class="text-lg text-[#05DF72]">{{ leaderboardData[2].earnings }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <div class="grid w-full max-w-md mx-auto grid-cols-3 bg-white/5 border border-white/10 rounded-lg p-1">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-4 py-2 rounded-md transition-all duration-200',
                activeTab === tab
                  ? 'bg-[#05DF72]/20 text-[#05DF72]'
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <div class="space-y-3">
            <div
              v-for="entry in leaderboardData"
              :key="entry.rank"
              class="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-[#05DF72]/30 transition-all duration-300"
            >
              <div class="flex items-center gap-2 sm:gap-3">
                <div class="w-8 sm:w-10 flex items-center justify-center shrink-0">
                  <Trophy v-if="entry.rank === 1" class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  <Medal v-else-if="entry.rank === 2" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                  <Award v-else-if="entry.rank === 3" class="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                  <span v-else class="text-xs sm:text-sm text-gray-400 font-semibold">#{{ entry.rank }}</span>
                </div>
                
                <div class="flex-1 min-w-0">
                  <p class="text-sm sm:text-base font-mono text-white truncate">{{ entry.address }}</p>
                </div>
                
                <div class="grid grid-cols-3 gap-2 sm:gap-4 text-center shrink-0">
                  <div class="min-w-[45px] sm:min-w-[60px]">
                    <p class="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Wins</p>
                    <p class="text-xs sm:text-sm text-[#05DF72] font-semibold">{{ entry.wins }}</p>
                  </div>
                  <div class="min-w-[55px] sm:min-w-[70px]">
                    <p class="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Earnings</p>
                    <p class="text-xs sm:text-sm text-[#05DF72] font-semibold">{{ entry.earnings }}</p>
                  </div>
                  <div class="min-w-[45px] sm:min-w-[60px]">
                    <p class="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Streak</p>
                    <p class="text-xs sm:text-sm text-orange-400 font-semibold flex items-center justify-center gap-0.5 sm:gap-1">
                      <TrendingUp class="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{{ entry.streak }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>
