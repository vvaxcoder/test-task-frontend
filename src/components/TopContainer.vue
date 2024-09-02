<template lang="pug">
.t-container
  .left-card-container
    UserSelected

  .right-card-container
    ItemSelected
</template>
        
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import ItemSelected from "../components/ItemSelected.vue";
import UserSelected from "../components/UserSelected.vue";

const store = useStore();
const getUserItems = store.getters.getUserItems;
const getItemsForSelect = store.getters.getItemsForSelect;
</script>
        
<style scoped lang="scss">
.t-container {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1190px) {
    flex-direction: column;
  }
}
</style>