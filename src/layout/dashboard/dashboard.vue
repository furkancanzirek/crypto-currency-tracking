<template>
  <div class="page dark:bg-black w-full h-screen">
    <div class="navbar text-black dark:text-white dark:bg-black relative">
      <div
        class="
          topNavbar
          pt-2
          flex
          w-full
          justify-between
          border-b
          dark:border-black
        "
      >
        <div class="topNavbarLeft flex items-center">
          <div class="logo flex items-center w-30 sm:w-60">
            <img
              class="h-24 ml-0 md:ml-3"
              src="/static/img/layout/logo.png"
              alt=""
            />
            <h1 class="text-lg hidden sm:inline sm:text-xl font-semibold">
              QuickCrypto
            </h1>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold ml-5 sm:ml-20">
            Dashboard
          </h2>
        </div>
        <div class="topNavbarRight flex items-center">
          <div class="searchBar relative">
            <SearchIcon
              class="
                h-5
                w-5
                absolute
                left-3
                top-1/2
                -translate-y-2/4
                dark:text-[#ccc]
                hidden
                lg:inline
              "
            />
            <input
              class="
                hidden
                lg:inline
                h-10
                w-72
                pl-10
                py-6
                mr-10
                rounded-md
                border border-black
                placeholder:text-black placeholder:text-[15px]
                dark:border-0 dark:placeholder:text-[#535353] dark:bg-[#1C1C1C]
                focus:outline-none
              "
              type="text"
              placeholder="Search Cryptocurrency"
            />
          </div>
          <button class="notification hidden md:inline lg:hidden mr-5">
            <SearchIcon class="h-5 w-5 dark:text-[#ccc]" />
          </button>
          <button class="notification hidden md:inline mr-5">
            <BellIcon class="h-5 w-5 dark:text-[#ccc]" />
          </button>
          <button
            @click="changeThemeMode"
            class="darkMode mr-5 hidden md:inline"
          >
            <SunIcon v-if="!darkMode" class="h-5 w-5 dark:text-[#ccc]" />
            <MoonIcon v-if="darkMode" class="h-5 w-5 dark:text-[#ccc]" />
          </button>
          <button class="avatar mr-5">
            <img
              class="h-12 w-12 rounded-full"
              src="static/img/layout/avatar.jpg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div
        class="
          leftNavbar
          text-black
          dark:text-white dark:bg-black
          w-60
          md:w-72
          absolute
          pl-5
          relative
        "
      >
        <menuItems />
      </div>
      <div class="content" :class="{'sm:pl-80':stateOfMenu,'pl-10':stateOfMenu}"></div>
    </div>
  </div>
</template>



<script setup>
import { provide, ref } from "vue";
import menuItems from "../menuItems/menuItems.vue";
import { useColorMode } from "@vueuse/core";
import {
  InboxIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
const darkMode = ref(false);
const mode = useColorMode();
const stateOfMenu = ref(true);

const changeThemeMode = () => {
  console.log("asdasdasd");
  mode.value = mode.value == "light" ? "dark" : "light";
  darkMode.value = !darkMode.value;
};
provide("stateOfMenu", stateOfMenu);
</script>
<style lang="scss">
@import "@/config/theme/themeVariables.scss";
</style>
<style lang="scss" scoped>
</style>