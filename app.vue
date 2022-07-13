<script setup lang="ts">
type Article = {
  title:string,
  body:string,
}
type Articles = Array<Article>
const articles = ref<Articles>([])
const {GetArticles} = useFirestore()
articles.value = await GetArticles()
</script>

<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <span>{{ article.title }}:</span>
      <span>{{ article.body }}</span>
    </div>
  </div>
</template>
