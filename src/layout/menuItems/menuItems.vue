

<template>
  <div
    @click="handleMenu"
    v-if="!stateOfMenu"
    class="
      inline
      sm:hidden
      absolute
      bg-pink
      border border-gray-300
      hover:bg-[#E36D85]
      hover:text-white
      hover:border-white
      hover:cursor-pointer
      rounded-xl
      transition
      ease-in-out
      duration-300
      translate-x-[10.5rem]
    "
    :class="{ closeIcon: stateOfMenu }"
  >
    <i class="ri-arrow-left-s-fill text-3xl p-1"></i>
  </div>
  <div
    class="sidebar relative transition ease-in-out duration-150"
    :class="{
      close: stateOfMenu,
      open: !stateOfMenu,
    }"
    @mouseenter="handleMenu"
    @mouseleave="handleMenu"
  >
    <div
      class="
        menuItem
        flex
        items-center
        dark:text-[#838383]
        font-semibold
        py-5
        max-h-[4.5rem]hover:text-white
        dark:hover:text-white
        w-40
        rounded-md
        cursor-pointer
        transition
        ease-in-out
        duration-150
        md:w-60
        translate-x-[10.5rem]
        sm:translate-x-48
      "
      :class="{
        close: stateOfMenu,
        active: menuItem.active,
        open: !stateOfMenu && menuItem.active,
        'bg-[#e36d85]': !stateOfMenu && menuItem.active,
      }"
      :key="menuItem.id"
      v-for="menuItem in menuItems"
      @click="changeMenuValue(menuItem.id)"
    >
      <i :class="['ri-' + menuItem.icon]" class="text-xl ml-5"></i>

      <span v-if="!stateOfMenu" class="ml-5 text-md md:text-xl">{{
        menuItem.title
      }}</span>
    </div>
  </div>
</template>
<script setup>
import menuItemList from "./menuItemList";
import { ref, inject } from "vue";
const stateOfMenu = inject("stateOfMenu");
const menuItems = ref(menuItemList);
const changeMenuValue = (menuItemId) => {
  console.log(menuItemId);
  menuItems.value.forEach((menuItem) => {
    if (menuItemId == menuItem.id) {
      menuItem.active = true;
    } else {
      menuItem.active = false;
    }
    console.log(menuItem.active);
  });
};

const handleMenu = () => {
  console.log("asdfasdf");
  stateOfMenu.value = !stateOfMenu.value;
};
</script>
<style lang="scss" scoped>
.sidebar {
  height: calc(100vh - 130px);
  .open.active {
    color: #fff;
  }
  .closeIcon {
    transform: translateX(500px) rotate(180deg) !important;
  }
  .close {
    width: 15px !important;
  }
}

.sidebar.close {
  height: calc(100vh - 130px);
  transform: translateX(-200px);
}
.sidebar.open {
  height: calc(100vh - 130px);
  transform: translateX(-180px) translateY(2px);
}
</style>