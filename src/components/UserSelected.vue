<template lang="pug">
.usrs-container
    .usrs-text(v-if="sibuLen === 0") {{ emptyUserTitle }}
    .usrs-wrapper(v-if="sibuLen > 0")
        .user-card-wrapper
          .card-wrapper
            .card(v-for="item in getSelectedItemsByUser", :key="item.id" @click.stop="deleteUserCard(item)") {{ item?.name }}
        .user-stat Selected: {{ sibuLen }} / {{ maxSelectedItems }}
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, toRaw } from "vue";

import Card from "../components/Card.vue";

const store = useStore();
const getSelectedItemsByUser = ref(
  computed(() => store.getters.getSelectedItemsByUser)
);
const sibuLen = ref(
  computed(() => store.getters.getSelectedItemsByUser.length)
);
const deleteUserCard = async (param) => {
  try {
    await store.dispatch("deleteUserCardAct", { param: toRaw(param) });
  } catch (error) {
    console.log(
      "Error thrown in Card handleCardClick deleteUserCardAct ",
      error
    );
  }
};
const maxSelectedItems = 6;
const emptyUserTitle = "Items not selected";
</script>

<style lang="scss" scoped>
.usrs-container {
  min-height: 160px;
  min-width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 6px solid #000000;

  @media screen and (max-width: 1190px) {
    margin-bottom: 16px;
  }

  .usrs-text {
    font-size: 22px;

    max-width: 160px;

    text-transform: uppercase;

    text-align: center;
  }

  .user-stat {
    width: 100%;

    text-align: center;
  }

  .card-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    .card {
      height: 100px;
      width: 100px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 12px;

      border: 6px solid #000000;
      cursor: pointer;
    }
  }
}
</style>
