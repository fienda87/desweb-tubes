<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import { Gift, Users, TrendingUp, Award, Target } from 'lucide-vue-next'
import ReferralGenerator from '../components/ReferralGenerator.vue'

const benefits = [
  {
    icon: Gift,
    title: 'Instant Bonus',
    description: 'Earn 25 GBC immediately when your friend signs up and deposits.',
  },
  {
    icon: TrendingUp,
    title: 'Lifetime Commission',
    description: 'Get 10% commission on all referral winnings forever.',
  },
  {
    icon: Users,
    title: 'Unlimited Referrals',
    description: 'No limits on invites. More referrals = more earnings.',
  },
  {
    icon: Award,
    title: 'VIP Rewards',
    description: 'Refer 10+ players for VIP status and higher commission rates.',
  },
]
</script>

<template>
  <div class="pt-20 bg-black min-h-screen text-white">
    <Navbar />
  
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-[#05DF72]/5 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,223,114,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 bg-[#05DF72]/10 border border-[#05DF72]/20 rounded-full px-4 py-2 mb-8">
          <Target class="w-4 h-4 text-[#05DF72]" />
          <span class="text-sm text-[#05DF72] font-medium">Earn More Together</span>
        </div>

        <h1 class="text-5xl font-bold text-white mb-4">Referral Program</h1>
        <p class="text-xl text-[#99a1af] max-w-2xl mx-auto">Invite friends and earn passive income. Get 10% commission on every game they play.</p>
      </div>
    </section>

    
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReferralGenerator />
      </div>
    </section>

    
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Referral Benefits</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#05DF72]/30 transition-all duration-300"
          >
            <div class="flex items-start gap-4">
              <div class="p-3 bg-gradient-to-br from-[#05DF72] to-[#04B25B] rounded-xl flex-shrink-0">
                <component :is="benefit.icon" class="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">{{ benefit.title }}</h3>
                <p class="text-sm text-[#99a1af]">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped>
</style>
