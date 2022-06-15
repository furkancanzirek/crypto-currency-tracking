<template>
  <div class="page dark:bg-black w-full h-screen">
    <div class="navbar text-black dark:text-white dark:bg-black">
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
              class="h-20 sm:h-24 ml-0 md:ml-3"
              src="/static/img/layout/logo.png"
              alt=""
            />
            <h1 class="text-lg hidden sm:inline sm:text-xl font-semibold">
              QuickCrypto
            </h1>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold ml-1 sm:ml-20">
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
          <Menu
            as="div"
            class="relative inline-block text-left focus:outline-none"
          >
            <div>
              <MenuButton class="focus:outline-none">
                <button class="more inline md:hidden mr-5">
                  <i class="ri-more-fill text-2xl dark:text-[#ccc]"></i>
                </button>
              </MenuButton>
            </div>

            <MenuItems
              class="
                absolute
                right-0
                mt-2
                w-56
                origin-top-right
                divide-y divide-gray-100
                rounded-md
                bg-white
                dark:bg-black
                ring-1 ring-black ring-opacity-5
                focus:outline-none
                z-10
                shadow-2xl
              "
              :class="[darkMode ? 'darkShadow' :'']"
            >
              <div class="h-72 w-72">asdfasdfasdfasdf</div>
            </MenuItems>
          </Menu>
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="">
                <button class="notification hidden md:inline mr-5">
                  <i class="ri-notification-fill dark:text-[#ccc]"></i>
                </button>
              </MenuButton>
            </div>

            <MenuItems
              class="
                absolute
                right-0
                mt-2
                w-56
                origin-top-right
                divide-y divide-gray-100
                rounded-md
                bg-white
                dark:bg-black
                ring-1 ring-black ring-opacity-5
                focus:outline-none
                z-10
                shadow-2xl
              "
            >
              <div
                class="h-72 w-72"
                 :class="[darkMode ? 'darkShadow' :'']"
              >
                Notificationdafsadf
              </div>
            </MenuItems>
          </Menu>

          <button class="search hidden md:inline lg:hidden mr-5">
            <SearchIcon class="h-5 w-5 dark:text-[#ccc]" />
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
        "
      >
        <menuItems />
      </div>
      <div
        class="
          rightNavbar
          text-black
          dark:text-white dark:bg-black
          w-60
          md:w-72
          absolute
          bg-white
          p-5
          right-1
          shadow-2xl
          h-[88.5vh]
        "
        :class="[darkMode ? 'darkShadow' :'']"
      >
        <messages />
      </div>
    </div>
  </div>
</template>



<script setup>
import { provide, ref ,onMounted} from "vue";
import menuItems from "../menuItems/menuItems.vue";
import messages from "@/features/layout/messages.vue";
import { useColorMode } from "@vueuse/core";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  InboxIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  SearchIcon,
} from "@heroicons/vue/solid";

const mode = useColorMode();
const darkMode = ref(mode.value=='light'?false:true);
const stateOfMenu = ref(true);
const stateOfMessages = ref(false);
const changeThemeMode = () => {
  console.log("asdasdasd");
  mode.value = mode.value == "light" ? "dark" : "light";
  darkMode.value = !darkMode.value;
};
provide("stateOfMessages", stateOfMessages);
provide("stateOfMenu", stateOfMenu);
onMounted(()=>{
  console.log(darkMode.value);
})
</script>
<style lang="scss">
@import "@/config/theme/themeVariables.scss";
</style>
<style lang="scss" scoped>
.content {
  width: calc(100vw - 340px);
}
.boxShadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
.darkShadow {
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 15px,
    rgb(255 255 255 / 15%) 0px 0px 3px 1px;
}
</style>