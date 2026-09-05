<script setup lang="ts">
useScrollReveal()

const mobileMenuOpen = ref(false)

const skills = [
  { icon: '🌐', category: 'Web Development', items: 'PHP · Laravel · Nuxt JS · Vue JS · HTML · CSS · JavaScript · ExpressJS' },
  { icon: '⚛️', category: 'Frontend', items: 'React JS · Vue JS · Tailwind CSS · Responsive Design · Component Architecture' },
  { icon: '💻', category: 'Programming', items: 'Python · Django · Java · C++ · Arduino · Algorithm Design · OOP' },
  { icon: '🗺️', category: 'Specialized', items: 'GIS Mapping · Spatial Analytics · Image Processing · AI Fundamentals' },
  { icon: '🗄️', category: 'Database & Tools', items: 'MySQL · PostgreSQL · SQLite · Database Design · Query Optimization · Figma · Git' },
  { icon: '🔧', category: 'DevOps & Auth', items: 'Docker · Git · PHPMailer · Email Systems · Admin Panels · Role-based Access Control' },
  { icon: '💳', category: 'Payments & Integrations', items: 'PayMongo · Stripe · Payment Gateway Setup · API Integration' },
]

const projects = [
  {
    num: '01',
    name: 'Tech Savvies Community Platform',
    desc: 'A full-stack community web platform for an IT organization built solo during internship. Features news publishing, member courses, merchandise store, event reminders, membership portal, and a members-only dashboard — all in one production site.',
    tags: ['Nuxt JS', 'Vue JS', 'TypeScript', 'Django', 'PostgreSQL', 'PayMongo'],
    link: 'https://www.techsavvies.space/',
    linkLabel: 'Live Site',
  },
  {
    num: '02',
    name: 'GIS Dog Bite Surveillance System',
    desc: 'A full-stack public health platform for anti-rabies vaccination scheduling and bite case monitoring with GIS clinic mapping and multi-role authentication.',
    tags: ['PHP', 'Laravel', 'GIS', 'MySQL', 'PHPMailer'],
    link: 'https://bitecasesystem.gisrabies.com',
    linkLabel: 'Live Site',
  },
  {
    num: '03',
    name: 'Booking System',
    desc: 'A web-based reservation platform with complete admin panel, user management, and booking workflow with reliable back-end transaction handling.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
    link: '#',
    linkLabel: 'Details',
  },
  {
    num: '04',
    name: 'E-commerce Website',
    desc: 'A full-featured online store with product listings, cart functionality, order management, and a comprehensive admin dashboard.',
    tags: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
    link: '#',
    linkLabel: 'Details',
  },
]

const pills = ['PHP & Laravel', 'Nuxt JS', 'Vue JS', 'React JS', 'Tailwind CSS', 'JavaScript', 'Python', 'Django', 'Java', 'C++', 'GIS Mapping', 'MySQL', 'PostgreSQL', 'SQLite', 'ExpressJS', 'Docker', 'Git', 'Arduino', 'PayMongo', 'Stripe', 'Figma']

const education = [
  { year: '2022 – 2026', school: 'Misamis University', degree: 'Bachelor of Science Major in Information Technology' },
  { year: '2020 – 2022', school: 'Pulot National High School', degree: 'Senior High School · With Honors', extra: 'Strand - Electrical Installation and Maintenance (EIM)' },
  { year: '2016 – 2020', school: 'Pulot National High School', degree: 'High School · With Honors' },
  { year: '2010 – 2016', school: 'Dimaluna Elementary School', degree: 'Elementary · With Honors' },
]

const navSections = ['About', 'Skills', 'Projects', 'Contact']
</script>

<template>
  <!-- NAV -->
  <nav class="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-[5vw] py-4 backdrop-blur-xl bg-cream/75 border-b border-navy/[0.05] shadow-soft transition-all duration-300 supports-[backdrop-filter]:bg-cream/65">
    <div class="font-serif text-lg font-semibold text-navy tracking-wide">
      M<span class="text-teal-m">.</span>A
    </div>

    <!-- Desktop nav -->
    <ul class="hidden md:flex gap-8 list-none">
      <li v-for="section in navSections" :key="section">
        <a
          :href="`#${section.toLowerCase()}`"
          class="relative no-underline text-[0.75rem] font-bold text-navy tracking-widest uppercase transition-colors duration-300 hover:text-teal-d after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-m after:transition-all after:duration-300 hover:after:w-full"
        >
          {{ section }}
        </a>
      </li>
    </ul>

    <!-- Mobile hamburger -->
    <button class="md:hidden flex flex-col gap-1.5 p-1" @click="mobileMenuOpen = !mobileMenuOpen">
      <span class="block w-6 h-[2px] bg-navy transition-all duration-300" :class="mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''" />
      <span class="block w-6 h-[2px] bg-navy transition-all duration-300" :class="mobileMenuOpen ? 'opacity-0' : ''" />
      <span class="block w-4 h-[2px] bg-navy transition-all duration-300" :class="mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : ''" />
    </button>
  </nav>

  <!-- Mobile menu overlay -->
  <Transition name="slide">
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-[99] bg-cream/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
    >
      <a
        v-for="section in navSections"
        :key="section"
        :href="`#${section.toLowerCase()}`"
        class="font-serif text-3xl font-light text-navy no-underline tracking-wide transition-colors duration-300 hover:text-teal-m"
        @click="mobileMenuOpen = false"
      >
        {{ section }}
      </a>
    </div>
  </Transition>

  <!-- HERO -->
  <section
    id="hero"
    class="min-h-screen grid grid-cols-1 md:grid-cols-[1.1fr_1fr] pt-20 relative overflow-hidden bg-mesh-hero"
  >
    <div class="flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 md:px-[4vw] md:pl-[7vw] pt-12 pb-4 md:py-[6vw] relative z-[2]">
      <span class="inline-block text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-navy border border-navy/40 rounded-full px-4 py-1.5 mb-8 opacity-0 animate-fade-up-1 bg-white/60 backdrop-blur-sm shadow-soft">
        IT Graduate · Ozamiz City, PH
      </span>

      <h1 class="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] text-navy mb-6 opacity-0 animate-fade-up-2">
        Mark Anthony<br />
        <span class="font-semibold block bg-gradient-to-r from-navy via-teal-d to-teal-m bg-clip-text text-transparent">Ogao-ogao</span>
      </h1>

      <p class="text-base text-muted leading-7 max-w-[420px] mb-10 opacity-0 animate-fade-up-3 text-balance">
        A fresh Information Technology graduate building thoughtful web applications and full-stack platforms.
      </p>

      <div class="flex flex-wrap justify-center md:justify-start gap-3 opacity-0 animate-fade-up-4">
        <a
          href="#projects"
          class="group relative bg-navy text-cream px-7 md:px-9 py-3.5 rounded-full no-underline text-[0.82rem] font-medium tracking-wide transition-all duration-300 hover:shadow-lift hover:shadow-navy/15 hover:-translate-y-0.5 overflow-hidden ring-1 ring-navy/10"
        >
          <span class="relative z-[1]">View Projects</span>
          <div class="absolute inset-0 bg-gradient-to-r from-teal-d to-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a
          href="#contact"
          class="border border-navy/15 bg-white/50 backdrop-blur-sm text-navy px-7 md:px-9 py-3.5 rounded-full no-underline text-[0.82rem] font-medium tracking-wide transition-all duration-300 hover:bg-navy hover:text-cream hover:-translate-y-0.5 hover:shadow-lift hover:shadow-navy/10 hover:border-navy"
        >
          Get in Touch
        </a>
      </div>

      <div class="flex items-center gap-3 mt-14 opacity-0 animate-fade-in-2">
        <div class="w-10 h-px bg-sand relative overflow-hidden">
          <span class="absolute left-[-100%] top-0 w-full h-full bg-navy animate-scan-line" />
        </div>
        <span class="text-[0.72rem] tracking-[0.15em] uppercase text-navy font-semibold">Scroll to explore</span>
      </div>
    </div>

    <!-- Hero Right — Desktop -->
    <div class="relative hidden md:flex items-end justify-end overflow-hidden">
      <div
        class="absolute top-0 right-0 bottom-0 w-[85%] bg-gradient-to-br from-navy via-navy to-teal-d opacity-0 animate-fade-in-1"
        style="clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%)"
      />
      <div class="absolute top-1/2 right-[25%] -translate-y-[45%] w-[360px] h-[360px] rounded-full border border-dashed border-cream/[0.08] animate-spin-slow z-[1]" />
      <div class="absolute top-1/2 right-[25%] -translate-y-[45%] w-[280px] h-[280px] rounded-full bg-teal-m/[0.08] animate-pulse-ring z-[1]" />
      <div class="absolute top-[18%] right-[12%] w-2.5 h-2.5 rounded-full bg-peach/50 opacity-0 animate-fade-in-2 z-[3]" />
      <div class="absolute bottom-[28%] right-[8%] w-2 h-2 rounded-full bg-teal-m/40 opacity-0 animate-fade-in-2 z-[3]" />
      <div class="relative z-[2] opacity-0 animate-fade-up-5 mr-[-30px] group">
        <img
          src="/image.png"
          alt="Mark Anthony Ogao-ogao"
          class="relative z-[2] w-[380px] max-h-[80vh] object-contain object-bottom animate-float drop-shadow-[0_20px_50px_rgba(37,53,112,0.5)] transition-transform duration-700 ease-out group-hover:scale-105"
          style="clip-path: ellipse(80% 130% at 50% 100%);"
        />
      </div>
    </div>

    <!-- Hero Image — Mobile -->
    <div class="relative flex md:hidden justify-center items-end overflow-hidden mt-2 pb-8">
      <div class="absolute bottom-0 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-navy to-teal-d opacity-0 animate-fade-in-1" />
      <div class="absolute bottom-4 w-[220px] h-[220px] rounded-full border border-dashed border-navy/20 animate-spin-slow" />
      <div class="relative z-[2] opacity-0 animate-fade-up-5">
        <img
          src="/image.png"
          alt="Mark Anthony Ogao-ogao"
          class="relative z-[2] w-[260px] max-h-[50vh] object-contain object-bottom animate-float drop-shadow-[0_15px_40px_rgba(37,53,112,0.35)]"
          style="clip-path: ellipse(85% 125% at 50% 100%);"
        />
      </div>
    </div>
  </section>

  <div class="h-px max-w-[min(90vw,72rem)] mx-auto bg-gradient-to-r from-transparent via-navy/[0.08] to-transparent" aria-hidden="true" />

  <!-- ABOUT -->
  <section id="about" class="px-6 md:px-[7vw] py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start bg-mesh-section">
    <div class="lg:sticky lg:top-28 reveal">
      <div class="flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-m mb-5 before:content-[''] before:w-7 before:h-px before:bg-teal-m">
        About
      </div>
      <h2 class="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-tight text-navy">
        Who I <em class="italic text-teal-m">am</em>
      </h2>

      <div class="mt-10">
        <div
          v-for="(edu, i) in education"
          :key="i"
          class="flex gap-6 pb-8 relative"
        >
          <div
            v-if="i < education.length - 1"
            class="absolute left-[11px] top-6 w-px bg-navy/[0.15]"
            style="height: calc(100% - 12px)"
          />
          <div class="w-[23px] h-[23px] rounded-full bg-cream border-2 border-teal-m shrink-0 mt-0.5 flex items-center justify-center">
            <div class="w-2 h-2 rounded-full bg-teal-m" />
          </div>
          <div>
            <div class="text-[0.78rem] text-navy font-bold tracking-wide mb-0.5">{{ edu.year }}</div>
            <div class="font-semibold italic text-navy text-[0.95rem]">{{ edu.school }}</div>
            <div class="text-[0.82rem] text-navy/80 mt-0.5 font-medium">{{ edu.degree }}</div>
            <div v-if="edu.extra" class="text-[0.78rem] text-navy/70 mt-0.5">{{ edu.extra }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="reveal rounded-3xl border border-navy/[0.06] bg-white/55 backdrop-blur-md shadow-soft p-8 md:p-10 ring-1 ring-white/60">
      <p class="text-base leading-[1.85] text-muted mb-5 text-pretty">
        I'm <strong class="text-text font-medium">Mark Anthony A. Ogao-ogao</strong>, a BS Information Technology graduate from Misamis University. I enjoy building complete, functional systems, spanning web development, programming, and AI.
      </p>
      <p class="text-base leading-[1.85] text-muted mb-5 text-pretty">
        I thrive on solving real-world problems through technology, as demonstrated by my GIS-based public health surveillance project that helps communities manage rabies control more effectively.
      </p>

      <div class="flex flex-wrap gap-2 mt-8 pt-8 border-t border-navy/[0.06]">
        <span
          v-for="pill in pills"
          :key="pill"
          class="bg-navy/[0.06] text-navy border border-navy/[0.20] px-4 py-1.5 rounded-full text-[0.75rem] font-semibold transition-all duration-300 hover:bg-navy hover:text-cream hover:border-navy hover:-translate-y-0.5 hover:shadow-soft cursor-default"
        >
          {{ pill }}
        </span>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="px-6 md:px-[7vw] py-20 md:py-28 bg-navy relative overflow-hidden">
    <div class="absolute -top-[60px] -right-[60px] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(91,144,153,0.25)_0%,transparent_70%)]" />
    <div class="absolute bottom-[-80px] left-[-40px] w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(250,200,130,0.1)_0%,transparent_70%)]" />

    <div class="flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.2em] uppercase text-peach mb-5 reveal before:content-[''] before:w-7 before:h-px before:bg-peach">
      Technical Skills
    </div>
    <h2 class="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-tight text-white mb-0 reveal">
      What I <em class="italic text-peach">build with</em>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
      <div
        v-for="skill in skills"
        :key="skill.category"
        class="group gradient-border glass rounded-2xl p-7 transition-all duration-500 relative overflow-hidden hover:-translate-y-1.5 hover:shadow-lift hover:shadow-teal-m/10 ring-1 ring-white/5 reveal"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-teal-m/5 to-peach/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div class="relative z-[1]">
          <div class="text-2xl mb-4 w-12 h-12 bg-gradient-to-br from-teal-m/25 to-peach/15 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            {{ skill.icon }}
          </div>
          <div class="text-[0.72rem] tracking-[0.15em] uppercase text-peach mb-2 font-medium">
            {{ skill.category }}
          </div>
          <div class="text-[0.88rem] text-cream/65 leading-relaxed group-hover:text-cream/80 transition-colors duration-300">
            {{ skill.items }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="px-6 md:px-[7vw] py-20 md:py-28">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
      <div>
        <div class="flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.2em] uppercase text-teal-m mb-5 reveal before:content-[''] before:w-7 before:h-px before:bg-teal-m">
          Projects
        </div>
        <h2 class="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-tight text-navy reveal">
          What I've <em class="italic text-teal-m">built</em>
        </h2>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.num"
        class="group relative bg-white/90 backdrop-blur-sm rounded-3xl border border-navy/[0.06] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:shadow-navy/[0.1] overflow-hidden reveal ring-1 ring-white/80"
      >
        <!-- Hover gradient glow -->
        <div class="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-teal-m/20 to-peach/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div class="relative z-[1]">
          <!-- Number + link row -->
          <div class="flex justify-between items-start mb-6">
            <span class="font-serif text-5xl font-light text-navy/10 group-hover:text-teal-m/30 transition-colors duration-500">
              {{ project.num }}
            </span>
            <a
              :href="project.link"
              target="_blank"
              class="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center no-underline text-muted transition-all duration-300 group-hover:bg-navy group-hover:text-cream group-hover:border-navy group-hover:scale-110"
            >
              ↗
            </a>
          </div>

          <div class="font-serif text-xl font-semibold text-navy mb-3 group-hover:text-teal-d transition-colors duration-300">
            {{ project.name }}
          </div>
          <div class="text-[0.85rem] text-muted leading-relaxed mb-5">
            {{ project.desc }}
          </div>

          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-[0.65rem] px-3 py-1 rounded-full tracking-wide bg-navy/[0.08] text-navy font-bold border border-navy/[0.20]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section
    id="contact"
    class="px-6 md:px-[7vw] py-20 md:py-28 bg-gradient-to-br from-navy via-[#2a3d75] to-teal-d relative overflow-hidden text-center"
  >
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(6rem,18vw,16rem)] font-semibold text-white/[0.02] whitespace-nowrap pointer-events-none -tracking-tight">
      CONNECT
    </div>
    <div class="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-teal-m/[0.06] blur-3xl" />
    <div class="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] rounded-full bg-peach/[0.05] blur-3xl" />

    <div class="flex items-center justify-center gap-3 text-[0.72rem] font-medium tracking-[0.2em] uppercase text-peach mb-5 reveal before:content-[''] before:w-7 before:h-px before:bg-peach">
      Contact
    </div>
    <h2 class="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-tight text-white max-w-[500px] mx-auto mb-6 reveal">
      Let's work <em class="italic text-peach">together</em>
    </h2>
    <p class="text-base text-cream/60 mb-14 reveal">
      Open for collaborations, freelance work, and new projects.
    </p>

    <div class="flex justify-center flex-wrap gap-5 relative z-[2] reveal">
      <a
        href="tel:09488706988"
        class="group gradient-border glass rounded-2xl p-6 px-8 no-underline text-white flex items-center gap-4 transition-all duration-500 min-w-[220px] hover:-translate-y-1.5 hover:shadow-lift hover:shadow-teal-m/20 ring-1 ring-white/10"
      >
        <div class="text-xl w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">📞</div>
        <div class="text-left">
          <div class="text-[0.68rem] uppercase tracking-widest text-cream/50">Phone</div>
          <div class="text-[0.88rem] font-medium mt-0.5">09488706988</div>
        </div>
      </a>

      <a
        href="mailto:markanthonyogaoogao@gmail.com"
        class="group gradient-border glass rounded-2xl p-6 px-8 no-underline text-white flex items-center gap-4 transition-all duration-500 min-w-[220px] hover:-translate-y-1.5 hover:shadow-lift hover:shadow-teal-m/20 ring-1 ring-white/10"
      >
        <div class="text-xl w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">✉️</div>
        <div class="text-left">
          <div class="text-[0.68rem] uppercase tracking-widest text-cream/50">Email</div>
          <div class="text-[0.88rem] font-medium mt-0.5">markanthonyogaoogao@gmail.com</div>
        </div>
      </a>

      <div class="group gradient-border glass rounded-2xl p-6 px-8 text-white flex items-center gap-4 min-w-[220px] ring-1 ring-white/10">
        <div class="text-xl w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center">📍</div>
        <div class="text-left">
          <div class="text-[0.68rem] uppercase tracking-widest text-cream/50">Location</div>
          <div class="text-[0.88rem] font-medium mt-0.5">Ozamiz City, Philippines</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="px-6 md:px-[7vw] py-10 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-navy/[0.06] bg-white/30 backdrop-blur-sm text-[0.78rem] text-muted">
    <span class="font-serif text-[0.95rem] text-navy">M<span class="text-teal-m">.</span>A · 2025</span>
    <div class="flex items-center gap-2">
      <div class="w-1.5 h-1.5 rounded-full bg-teal-m/50" />
      <span>Designed with care · BS Information Technology</span>
    </div>
  </footer>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
