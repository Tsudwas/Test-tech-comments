<script setup>
import CommentSection from '../components/CommentSection.vue';
import Login from '../components/Login.vue';
import { getRecentComments } from '../services/comment';
import { onMounted, ref } from 'vue';
import Article1 from './Article1.vue';
import Article2 from './Article2.vue';

const comments = ref({});
const selected = ref('home');

function setSelectedPage(selectedPage) {
  selected.value = selectedPage;
};

onMounted(async () => {
 comments.value = await getRecentComments();
});

</script>

<template>
    <div >
        <button @click="setSelectedPage('home')">Home</button>
        <button @click="setSelectedPage('article1')">Article1</button>
        <button @click="setSelectedPage('article2')">Article2</button>
    </div>
    <div v-if="selected === 'home'">
        <h1>
            Bienvenue
        </h1>
        <Login />
    </div>
    <Article1 v-if="selected === 'article1'"></Article1>
    <Article2 v-if="selected === 'article2'"></Article2>
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
