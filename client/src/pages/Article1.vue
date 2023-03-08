<script setup>
import { onMounted, ref } from 'vue';
import CommentSection from '../components/CommentSection.vue';
import { getArticle } from '../services/article';

const articleId = "49c0f93c-2f35-4028-89b8-a125ea9a48e8";
const article = ref({});

onMounted(async () => {
  article.value = await getArticle({ articleId });
});
</script>

<template>
    <div >
        <h1>{{ article.headline }}</h1>
        <p>{{ article.content }}</p>
      </div>
      <CommentSection :articleId="articleId"/>
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
