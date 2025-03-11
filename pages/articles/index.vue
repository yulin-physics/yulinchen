<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="article in articles" :key="article.id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { DevToService } from "@/dev-to-service";
import type DevToArticleMeta from "@/interfaces/dev-to-article-meta";

export default defineComponent({
  name: 'ArticlesPage',
  async setup() {
    const articles = ref<DevToArticleMeta[]>([]);

    onBeforeMount(async () => {
      articles.value = await DevToService.fetchArticles();
    });

    const description = "The blogs and articles I wrote just for fun and document my learning journey for future reference! Especially the bugs I have encountered and spent hours (and days) deciphering.";

    useSeoMeta({
      title: "Articles | Yulin Chen",
      description,
    });

    return {
      articles,
      description
    };
  }
});
</script>
