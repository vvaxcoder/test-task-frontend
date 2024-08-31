<template lang="pug">
.usrs-container
    .usrs-text(v-if="getSelectedItemsByUser.length === 0") {{ emptyUserTitle }}
    .usrs-wrapper(v-if="getSelectedItemsByUser.length > 0")
        .user-card-wrapper
            Card(:items="getSelectedItemsByUser" ptype="userSelectedItem")
        .user-stat Selected: {{ selectedNumber }} / {{ maxSelectedItems }}
</template>
    
<script setup>
import { useStore } from "vuex";

import Card from "../components/Card.vue";

const store = useStore();
const getSelectedItemsByUser = store.getters.getSelectedItemsByUser;
const emptyUserTitle = "Items not selected";
</script>
    
<style lang="scss" scoped>
.usrs-container {
  height: 160px;
  width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 6px solid #000000;

  .usrs-text {
    font-size: 22px;
    text-transform: uppercase;

    text-align: center;
  }
}
</style>