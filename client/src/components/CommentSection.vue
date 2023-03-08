<script setup>
import CommentItem from './CommentItem.vue';
import { onMounted, ref } from 'vue';

import WriteComment from '../components/WriteComment.vue';
import { getComments } from '../services/comment';
import Reply from './Reply.vue';

const props = defineProps({
    articleId: String
});

const comments = ref([]);

onMounted(async () => {
    comments.value = await getComments({ mediaId: props.articleId });
});
</script>

<template>
    <div>
        <h1 class="comments">
            Commentaires:
        </h1>
        <div class="list">
            <li v-for="(comment) in comments" class="element">
                <CommentItem :text="comment.comment" :author="comment.author" />
                <Reply :commentId="comment.commentId" :replies="comment.replies" />
            </li>
        </div>
        <div class="comments">
            <WriteComment :articleId="articleId"></WriteComment>
        </div>
    </div>
</template>

<style>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
}


.element {
    background-color: lightgray;
    width: 33%;
    margin: 15px;
}

.comments {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
