<template lang="pug">
.b-container
    .left-card-container(:class="{ _disabled: checkBlockLEftSection }")
        Card(:items="getUserItems" ptype="userItem")

    .right-card-container
        Card(:items="getItemsForSelect" ptype="itemForSelect")
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import Card from "../components/Card.vue";

const store = useStore();
const getUserItems = computed(() => store.getters.getUserItems);
const getItemsForSelect = computed(() => store.getters.getItemsForSelect);
const checkBlockLEftSection = ref(
  computed(() => store.getters.isUserItemsReached)
);
</script>

<style scoped lang="scss">
.b-container {
  height: 100%;
  width: 100%;

  display: flex;

  .left-card-container,
  .right-card-container {
    flex-basis: 50%;

    border: 6px solid #000000;
  }

  .left-card-container {
    margin-right: 26px;

    @media screen and (max-width: 1190px) {
        margin-right: 12px;
    }

    @media screen and (max-width: 460px) {
        margin-right: 6px;
    }
  }

  .left-card-container._disabled {
    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }

  .right-card-container {
    margin-left: 26px;

    @media screen and (max-width: 1190px) {
        margin-left: 12px;
    }

    @media screen and (max-width: 460px) {
        margin-left: 6px;
    }
  }
}
</style>
