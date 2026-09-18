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

/* ─── Aurora Borealis — Aura Background ─────────────────────────────────── */
/* Base color lives on .aura-bg's parent/page — NOT on the container itself */

.aura-bg {
  position: relative;
  overflow: hidden;
  /* NO background-color — layers blend against the parent background */
}

.aura-layer-1 {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    154deg,
    transparent 18%,
    rgba(12,72,61,0.06) 29%,
    rgba(0,229,255,0.40) 36%,
    rgb(255,255,255) 42%,
    rgba(73,207,158,0.32) 48%,
    rgba(38,158,119,0.22) 55%,
    rgba(0,183,255,0.30) 62%,
    rgba(15,76,65,0.08) 68%,
    transparent 82%
  );
  mix-blend-mode: screen;
  filter: blur(85px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-1 { filter: blur(122px); }
}

.aura-layer-2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    128deg,
    transparent 28%,
    rgba(15,82,96,0.06) 38%,
    rgba(0,183,255,0.35) 43%,
    rgb(255,255,255) 48%,
    rgba(68,197,185,0.22) 52%,
    rgba(0,229,255,0.25) 57%,
    rgba(25,105,112,0.10) 62%,
    transparent 76%
  );
  mix-blend-mode: screen;
  filter: blur(75px);
  opacity: 0.9;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-2 { filter: blur(108px); }
}

.aura-layer-3 {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 78% 20% at 51% 53%, rgba(65,183,155,0.24) 0%, rgba(30,102,91,0.10) 45%, transparent 82%);
  mix-blend-mode: screen;
  filter: blur(70px);
  opacity: 0.9;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-3 { filter: blur(101px); }
}

.aura-layer-4 {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 48% 9% at 52% 50%, rgba(190,255,226,0.14) 0%, rgba(91,195,163,0.06) 45%, transparent 80%);
  mix-blend-mode: screen;
  filter: blur(175px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-4 { filter: blur(252px); }
}

.aura-layer-5 {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(1,5,13,0.90) 0%, rgba(2,7,16,0.58) 28%, rgba(3,9,20,0.20) 55%, transparent 78%);
  mix-blend-mode: multiply;
  filter: blur(80px);
  opacity: 0.9;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-5 { filter: blur(115px); }
}

.aura-layer-6 {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 50% 28% at 72% 18%, rgba(89,62,151,0.10) 0%, rgba(57,44,100,0.04) 45%, transparent 82%);
  mix-blend-mode: screen;
  filter: blur(138px);
  opacity: 0.7;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-6 { filter: blur(198px); }
}

.aura-grain {
  position: absolute;
  inset: 0;
  mix-blend-mode: overlay;
  opacity: 0.85;
  pointer-events: none;
}

/* ─── Light-surface variants (swap screen → multiply) ──────────────────── */
/* Use these when the section background is light/cream so aurora stays visible */

.aura-layer-1-light {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    154deg,
    transparent 18%,
    rgba(12,72,61,0.04) 29%,
    rgba(0,180,200,0.22) 36%,
    rgba(200,240,235,0.60) 42%,
    rgba(73,207,158,0.18) 48%,
    rgba(38,158,119,0.12) 55%,
    rgba(0,140,200,0.16) 62%,
    rgba(15,76,65,0.04) 68%,
    transparent 82%
  );
  mix-blend-mode: multiply;
  filter: blur(85px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-1-light { filter: blur(122px); }
}

.aura-layer-2-light {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    128deg,
    transparent 28%,
    rgba(15,82,96,0.04) 38%,
    rgba(0,140,200,0.18) 43%,
    rgba(200,235,240,0.55) 48%,
    rgba(68,197,185,0.14) 52%,
    rgba(0,180,200,0.14) 57%,
    rgba(25,105,112,0.06) 62%,
    transparent 76%
  );
  mix-blend-mode: multiply;
  filter: blur(75px);
  opacity: 0.9;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-2-light { filter: blur(108px); }
}

.aura-layer-3-light {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 78% 20% at 51% 53%, rgba(65,183,155,0.14) 0%, rgba(30,102,91,0.06) 45%, transparent 82%);
  mix-blend-mode: multiply;
  filter: blur(70px);
  opacity: 0.9;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-3-light { filter: blur(101px); }
}

.aura-layer-4-light {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 48% 9% at 52% 50%, rgba(160,220,200,0.18) 0%, rgba(91,195,163,0.08) 45%, transparent 80%);
  mix-blend-mode: multiply;
  filter: blur(175px);
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-4-light { filter: blur(252px); }
}

.aura-layer-5-light {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(220,228,240,0.50) 0%, rgba(210,222,238,0.28) 28%, rgba(200,215,230,0.10) 55%, transparent 78%);
  mix-blend-mode: multiply;
  filter: blur(80px);
  opacity: 0.7;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-5-light { filter: blur(115px); }
}

.aura-layer-6-light {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 50% 28% at 72% 18%, rgba(160,140,210,0.12) 0%, rgba(120,100,180,0.05) 45%, transparent 82%);
  mix-blend-mode: multiply;
  filter: blur(138px);
  opacity: 0.7;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

@media (min-width: 768px) {
  .aura-layer-6-light { filter: blur(198px); }
}

.aura-grain-light {
  position: absolute;
  inset: 0;
  mix-blend-mode: overlay;
  opacity: 0.45;
  pointer-events: none;
}
/* ─────────────────────────────────────────────────────────────────────────── */

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
