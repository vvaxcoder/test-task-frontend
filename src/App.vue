<template lang="pug">
main.general-wrapper
    section.top_section
        TopContainer

    section.bottom_section
        BottomContainer
</template>

<script setup>
import BottomContainer from "./components/BottomContainer.vue";
import TopContainer from "./components/TopContainer.vue";
</script>

<style scoped lang="scss">
@import "@/assets/styles/app.scss";
</style>
