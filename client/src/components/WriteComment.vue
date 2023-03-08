<script setup>
import { ref } from 'vue';
import { postComment } from '../services/comment';

const props = defineProps({
  articleId: String
});

const user = "Albert Fosse";
const comment = ref("");

async function publishComment() {
  await postComment({
    comment: comment.value,
    mediaId: props.articleId,
    author: user,
    publicationDate: new Date()
  });
};
</script>

<template>
    <div >
        <h1>
            Entrez votre commentaire:
        </h1>
        <textarea v-model="comment" placeholder="Commentez..." />
        <button @click="publishComment">Publier</button>
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
