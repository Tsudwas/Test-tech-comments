<script setup>
defineProps({
    text: String,
    author: String
});
</script>

<template>
  <div class="item">
    <h3>
        {{ author }}:
    </h3>
    <p> {{ text }} </p>
  </div>
</template>

<style>
.item {
    padding: 5px;
}
</style>
