
<script setup>

import Navbar from '../components/navbar.vue'
import HeroSection from '../components/homepage/Herohomepage.vue'
import AboutSection from '../components/homepage/AboutSection.vue'
import StatsSection from '../components/homepage/statsSect.vue'
import GameplayCarousel from '../components/homepage/gamepreview.vue'
import WhyChooseSection from '../components/homepage/whysect.vue'
import CTASection from '../components/homepage/CTASection.vue'
import Footer from '../components/footer.vue'
</script>

<template>

  <div class="bg-black w-full" data-name="homepage">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <GameplayCarousel />
    <WhyChooseSection />
    <CTASection />
    <Footer />
  </div>
</template>

<style scoped>

* {
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}
</style>

