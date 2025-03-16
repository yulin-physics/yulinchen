<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
      <article v-if="!loading">

        <h1>{{ article.title }}</h1>

        <div class="flex text-sm text-gray-400 dark:text-gray-500">
          <time class="w-5/6">
            {{ article.readable_publish_date }}
          </time>
          <div class="w-1/6 cursor-pointer" :onclick=goto(article)>
            {{ article.public_reactions_count }}
            <Icon aria-hidden="true" name="mdi:heart" class="w-5 h-5 z-10" />
          </div>
        </div>

        <div v-if="article.cover_image">
          <img :src=article.cover_image alt="cover image">
        </div>

        <div v-html="article.body_html"></div>
      </article>
    </div>
  </main>
</template>
<script lang="ts">
import type { DevToArticle } from "@/interfaces/dev-to-article";
import { DevToService } from "@/dev-to-service";
import type { DevToArticleMeta } from "@/interfaces/dev-to-article-meta";

export default defineComponent({
  name: 'ArticlePage',
  setup() {
    const article = ref<DevToArticle>();
    const loading = ref<boolean>(true);

    onBeforeMount(async (): DevToArticle => {
      // this.$route.params.id
      const route = useRoute();
      const { id } = route.params;
      article.value = await DevToService.getArticle(id);
      loading.value = false;
    });

    useSeoMeta({
      ogImage: article.cover_image,
      articleAuthor: "Yulin Chen",
    });

    return {
      article, loading
    };
  },
  methods: {
    goto(article: DevToArticle) {
      // this.$router.push(url)
      return () => navigateTo(article.url, { external: true })
    }
  }
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
