<template lang="pug">
.itms-container
  .itms-text(v-if="len === 0") {{ emptyTitle }}
  .itms-text(v-else) {{ selectedItem }}
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const getSelectedItem = store.getters.getSelectedItem;
const len = Object.keys(getSelectedItem).length;
const emptyTitle = "Item not selected";
const selectedItem = getSelectedItem?.name || "";
</script>

<style lang="scss" scoped>
.itms-container {
  height: 160px;
  width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 6px solid #000000;

  .itms-text {
    font-size: 22px;
    text-transform: uppercase;

    text-align: center;
  }
}
</style>