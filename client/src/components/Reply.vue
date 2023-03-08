<script setup>
import { ref } from 'vue';
import { postReply } from '../services/comment';

const props = defineProps({
    replies: Array,
    commentId: String
});

const user = "Albert Fosse";
const toggleReply = ref(false);
const reply = ref("");

function toggleReplyArea() {
    toggleReply.value = !toggleReply.value;
};

async function publishReply() {
    await postReply({ commentId: props.commentId, reply: {
            text: reply.value,
            author: user
        }
    });
    toggleReplyArea();
};
</script>

<template>
    <div class="replies">
            <li v-for="(reply) in replies">
               {{ reply.author  }}: {{ reply.text }}
            </li>
    </div>
    <button v-if="!toggleReply" @click="toggleReplyArea">Répondre</button>
    <button v-if="toggleReply" @click="publishReply">Publier</button>
    <textarea v-if="toggleReply" v-model="reply" placeholder="Répondre..." />
</template>

<style>

.replies {
    list-style-type: square;
    justify-content: left;
    margin: 5px;
    background-color: white;
}
</style>

