<script setup>
import menuItemList from "./menuItemList";
import { ref } from "vue";
const stateOfMenu = ref(true);

const handleMenu = () => {
  stateOfMenu.value = !stateOfMenu.value;
};
</script>

<template>
  <div class="sidebar relative">
    <div @click="handleMenu" class="closeIcon absolute right-0">
      <i class="ri-arrow-left-circle-fill text-2xl"></i>
    </div>
    <div
      v-bind:style="[ stateOfMenu?{'opacity':0}:'']"
      class="
        menuItem
        flex
        items-center
        dark:text-[#838383]
        font-semibold
        py-5
        my-2
        hover:bg-[#E36D85] hover:text-white
        dark:hover:text-white
        pl-2
        w-60
        rounded-md
        cursor-pointer
        transition
        ease-in-out
        duration-150
      "
      :key="index"
      v-for="menuItem in (index, menuItemList)"
    >
      <i :class="'ri-' + menuItem.icon" class="text-xl ml-10"></i>
      <span class="ml-5 text-xl">{{ menuItem.title }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.closeIcon {
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>