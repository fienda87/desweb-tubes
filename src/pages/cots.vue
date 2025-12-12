<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'



const profile = {
  name: 'Risky Alfienda',
  role: 'Full Stack Developer',
  lokasi: 'balikpapan, Indonesia',
  email: 'alfienda@email.com',
  bio: 'Passionate developer with expertise in modern web technologies. Love building scalable and user-friendly applications.',
  photo: '/src/assets/profil.jpg
}

// Skill set
const skills = [
  {
    
    category: 'Frontend',
    items: ['Vue.js', 'React', 'Tailwind CSS', 'JavaScript']
  },
  {
    
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL',]
  },
  {
    
    category: 'Mobile',
    items: ['React Native']
  },
  {
    
    category: 'Design',
    items: ['Figma', 'UI/UX Design', ]
  }
]

</script>

<template>
  <div class="pt-20 bg-black min-h-screen text-white">
    <Navbar />

    
    <section class="relative py-20 overflow-hidden">
      
      <div class="absolute inset-0 bg-linear-to-b from-black via-[#05DF72]/5 to-black"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,223,114,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          
          <div class="hidden md:block shrink-0">
            <div class="relative group">
              <div class="absolute inset-0 bg-linear-to-b from-[#05DF72] to-[#04B25B] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                :src="profile.photo" 
                :alt="profile.name"
                class="relative w-48 h-48 rounded-2xl object-cover border-2 border-[#05DF72]/20"
              />
            </div>
          </div>

          
          <div class="flex-1 text-center md:text-left">
           
            <div class="inline-flex items-center gap-2 bg-[#05DF72]/10 border border-[#05DF72]/20 rounded-full px-4 py-2 mb-6">
              <span class="w-2 h-2 bg-[#05DF72] rounded-full animate-pulse"></span>
              <span class="text-sm text-[#05DF72] font-medium">Available for Work</span>
            </div>

            
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-3">
              {{ profile.name }}
            </h1>
            <p class="text-xl md:text-2xl text-[#05DF72] mb-4">
              {{ profile.role }}
            </p>

            
            <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6 text-gray-400">
              <div class="flex items-center gap-2">
                <MapPin class="w-4 h-4" />
                <span class="text-sm">{{ profile.lokasi }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Mail class="w-4 h-4" />
                <a :href="`mailto:${profile.email}`" class="text-sm hover:text-[#05DF72] transition">
                  {{ profile.email }}
                </a>
              </div>
            </div>

            
            <p class="text-gray-300 text-base leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
              {{ profile.bio }}
            </p>

            
              
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Skills & Expertise
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#05DF72]/30 transition group"
          >]
            <div class="flex items-center gap-3 mb-4">
              <div class="p-3 bg-linear-to-b from-[#05DF72] to-[#04B25B] rounded-xl">
                <component :is="skill.icon" class="w-5 h-5 text-black" />
              </div>
              <h3 class="text-xl font-bold text-white">
                {{ skill.category }}
              </h3>
            </div>

            
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in skill.items"
                :key="item"
                class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 group-hover:border-[#05DF72]/20 transition"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  \
    <Footer />
  </div>
</template>