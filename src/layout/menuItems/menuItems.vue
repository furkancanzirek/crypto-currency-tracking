

<template >
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
      translate-x-[11.8rem]
      mt-5
    "
    :class="{ closeIcon: stateOfMenu }"
  >
    <i class="ri-arrow-left-s-fill text-3xl p-1"></i>
  </div>
  <div
    class="sidebar relative transition ease-in-out duration-150 mt-5"
    :class="{
      close: stateOfMenu,
      open: !stateOfMenu,
      'w-60 md:w-72': !stateOfMenu,
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
        max-h-[4.5rem]
        dark:hover:text-white
        hover:text-white
        w-40
        rounded-md
        cursor-pointer
        transition
        ease-in-out
        duration-150
        md:w-60
        translate-x-[12rem]
        sm:translate-x-48
        mt-[0.2rem]
      "
      :class="{
        close: stateOfMenu,
        active: menuItem.active,
        open: !stateOfMenu && menuItem.active,
        ' justify-center': stateOfMenu,
        'bg-[#e36d85]': !stateOfMenu && menuItem.active,
        'hover:bg-[#e36d85]': !stateOfMenu && !menuItem.active,
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
    <div class="bottomOptions absolute bottom-0">
      <div
        class="
          menuItem
          flex
          items-center
          dark:text-[#838383]
          font-semibold
          py-5
          max-h-[4.5rem]
          dark:hover:text-white
          hover:text-[#E36D85]
          w-40
          rounded-md
          cursor-pointer
          transition
          ease-in-out
          duration-150
          md:w-60
          translate-x-[12rem]
          sm:translate-x-48
          mt-[0.2rem]
        "
        :class="{
          close: stateOfMenu,
        }"
      >
        <i
          class="ri-settings-4-fill text-xl ml-5"
          :class="{
            'ml-10': stateOfMenu,
          }"
        ></i>

        <span v-if="!stateOfMenu" class="ml-5 text-md md:text-xl"
          >Settings</span
        >
      </div>
      <div
        class="
          menuItem
          flex
          items-center
          dark:text-[#838383]
          font-semibold
          py-5
          max-h-[4.5rem]
          dark:hover:text-white
          hover:text-[#E36D85]
          w-40
          rounded-md
          cursor-pointer
          transition
          ease-in-out
          duration-150
          md:w-60
          translate-x-[12rem]
          sm:translate-x-48
          mt-[0.2rem]
        "
        :class="{
          close: stateOfMenu,
        }"
        @click="logOut"
      >
        <i
          class="ri-logout-box-r-fill text-xl ml-5"
          :class="{
            'ml-10': stateOfMenu,
          }"
        ></i>
        <span v-if="!stateOfMenu" class="ml-5 text-md md:text-xl">Logout</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import menuItemList from "./menuItemList";
import { ref, inject, onMounted } from "vue";
import { signOut, getAuth } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const stateOfMenu = inject("stateOfMenu");
const menuItems = ref(menuItemList);
const changeMenuValue = (menuItemId) => {

  menuItems.value.forEach((menuItem) => {
    if (menuItemId == menuItem.id) {
      menuItem.active = true;
    } else {
      menuItem.active = false;
    }

  });
};
let auth;
onMounted(() => {
  auth = getAuth();
});
const logOut = () => {

  signOut(auth).then(() => {
    router.push("/");
    localStorage.removeItem("userData");
    localStorage.removeItem("authKey");
  });
};
const handleMenu = () => {

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
    width: 80px !important;
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