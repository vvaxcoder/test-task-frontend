<template lang="pug">
.b-container
    .left-card-container
        Card(:items="getUserItems" ptype="userItem")

    .right-card-container
        Card(:items="getItemsForSelect" ptype="itemForSelect")
</template>
    
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Card from "../components/Card.vue";

const store = useStore();
const getUserItems = store.getters.getUserItems;
const getItemsForSelect = store.getters.getItemsForSelect;
</script>
    
<style scoped lang="scss">
.b-container {
    height: 100%;
    width: 100%;

    display: flex;

    .left-card-container, .right-card-container {
        flex-basis: 50%;

        border: 6px solid #000000;
    }

    .left-card-container {
        margin-right: 26px;
    }

    .right-card-container {
        margin-left: 26px;
    }
}
</style>