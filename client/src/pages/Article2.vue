<script setup>
import { onMounted, ref } from 'vue';
import CommentSection from '../components/CommentSection.vue';
import { getArticle } from '../services/article';

const articleId = "7dce339f-7c3c-4751-9ca0-3452f4e8d044";
const article = ref({});

onMounted(async () => {
  article.value = await getArticle({ articleId });
});
</script>

<template>
    <div >
      <h1>{{ article.headline }}</h1>
      <p>{{ article.content }}</p>
      <CommentSection :articleId="articleId"/>
    </div>
</template>

<style>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button-set {
  display: flex;
  justify-content: center;
}
</style>
