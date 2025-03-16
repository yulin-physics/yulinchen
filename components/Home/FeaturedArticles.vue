<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      RECENT ARTICLES
    </h2>
    <AppArticleCard :article="article" />
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton label="All Articles &rarr;" to="/articles" variant="link" color="gray" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DevToService } from "@/dev-to-service";

const { data: article } = await useAsyncData("article-home", () =>
  DevToService.getRecentArticle()
);
</script>
