<template lang="pug">
.card-wrapper
  .card(v-for="item in items", :key="item.id" @click.stop="handleCardClick(item?.id)") {{ item?.name }}
</template>
    
<script setup>
import { defineProps, isProxy, toRaw } from "vue";

const props = defineProps(["items", "ptype"]);
const items = isProxy(props) ? toRaw(props?.items) : props?.items;
const ptype = isProxy(props) ? toRaw(props?.ptype) : props?.ptype;

const handleCardClick = (param) => {
    alert(param);
};
</script>
    
<style scoped lang="scss">
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
</style>