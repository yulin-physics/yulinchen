<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.png" alt="Yulin Chen"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm Yulin, coming from a physics background I work as a software engineer mainly coding in rust currently. I started embarking on my coding journey in July 2021 when I realised there is more you can create than fitting trend lines to data in Python. I've had experiences in building full stack applications and sites
      using Javascript, React, Vue, Node, GraphQL, Postgres, Go &amp; Rust. 
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a Rust Developer, and
      by night (and weekends), I'm busy exploring new crafts and solving puzzles.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Yulin Chen",
  description:
    "I'm Yulin, an ordinary Rust developer with a physics background",
});
</script>
