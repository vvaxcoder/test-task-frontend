<template lang="pug">
.card-wrapper
  .card(v-for="item in items", :key="item.id" @click.stop="handleCardClick(item)") {{ item?.name }}
</template>

<script setup>
import { isProxy, toRaw } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps(["items", "ptype"]);
const items = isProxy(props) ? toRaw(props?.items) : props?.items;
const ptype = isProxy(props) ? toRaw(props?.ptype) : props?.ptype;

const handleCardClick = async (param) => {
  if (ptype === "itemForSelect") {
    try {
      await store.dispatch("updateSelectedItem", {
        param: toRaw(param),
        ptype,
      });
    } catch (error) {
      console.log(
        "Error thrown in Card handleCardClick updateSelectedItem ",
        error
      );
    }
  }

  if (ptype === "userItem") {
    try {
      await store.dispatch("updateItemForSelect", {
        param: toRaw(param),
        ptype,
      });
    } catch (error) {
      console.log(
        "Error thrown in Card handleCardClick updateItemForSelect ",
        error
      );
    }
  }
};
</script>

<style scoped lang="scss">
.card-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  .card {
    height: 100px;
    width: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 12px;

    border: 6px solid #000000;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      margin: 10px;
    }
  }
}
</style>
