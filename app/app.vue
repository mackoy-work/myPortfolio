<template>
  <div class="font-sans antialiased bg-[#f3efe6] text-text overflow-x-hidden selection:bg-teal-m/25 selection:text-navy">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

.gradient-border {
  position: relative;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(91,144,153,0.4), rgba(250,200,130,0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.glass {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(37,53,112,0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(37,53,112,0.35);
}
</style>
