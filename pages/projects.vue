<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "I’ve worked on a number of personal and experimental projects (I've excluded professional ones from work since they are not open source) but these are the ones that I’m most proud of. Some of them are still work in progress, if you have ideas for how it can be improved feel free to open issues or contact me.";
useSeoMeta({
  title: "Projects | Yulin Chen",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
