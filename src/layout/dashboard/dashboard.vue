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
              v-model="selectedCoin"
              @blur="handleSearchBar"
              @focus="handleSearchBar"
            />
            <div
              class="
                searchValue
                absolute
                top-[3.3rem]
                h-72
                w-72
                rounded-md
                focus:outline-none
                bg-white
                dark:bg-black
                z-10
                shadow-2xl
                overflow-y-scroll
                cursor-pointer
              "
              :class="{
                darkShadow: darkMode,
              }"
              
            >
              <div class="" v-for="coin in filteredCoin" :key="coin" :value="coin">
                {{ coin }}
              </div>
            </div>
          </div>

          <Menu as="div" class="relative inline-block text-left mr-5">
            <div>
              <MenuButton class="">
                <button class="notification hidden md:inline">
                  <i
                    class="ri-notification-fill dark:text-[#ccc]"
                    :class="{
                      'icon-active': stateOfNotifications,
                    }"
                  ></i>
                </button>
              </MenuButton>
            </div>

            <MenuItems
              class="
                absolute
                right-0
                mt-2
                w-72
                origin-top-right
                divide-y divide-gray-100
                rounded-md
                bg-white
                dark:bg-black
                ring-1 ring-black ring-opacity-5
                focus:outline-none
                z-10
                shadow-2xl
                overflow-y-scroll
              "
              :class="{
                darkShadow: darkMode,
              }"
              @blur="handleNotifications"
              @focus="handleNotifications"
            >
              <notifications />
            </MenuItems>
          </Menu>
          <Menu as="div" class="relative inline-block text-left mr-5">
            <div>
              <MenuButton class="">
                <button class="messages hidden md:inline">
                  <i
                    class="ri-chat-3-fill dark:text-[#ccc]"
                    :class="{
                      'icon-active': stateOfMessages,
                    }"
                  ></i>
                </button>
              </MenuButton>
            </div>

            <MenuItems
              class="
                absolute
                right-0
                mt-2
                w-72
                origin-top-right
                divide-y divide-gray-100
                rounded-md
                bg-white
                dark:bg-black
                ring-1 ring-black ring-opacity-5
                focus:outline-none
                z-10
                shadow-2xl
                overflow-y-scroll
                h-[50vh]
              "
              :class="{
                darkShadow: darkMode,
              }"
              @blur="handleMessages"
              @focus="handleMessages"
            >
              <messages />
            </MenuItems>
          </Menu>
          <button class="search hidden md:inline lg:hidden mr-5">
            <SearchIcon class="h-5 w-5 dark:text-[#ccc]" />
          </button>

          <button
            @click="changeThemeMode"
            class="darkMode mr-5 hidden md:inline"
          >
            <i v-if="!darkMode" class="ri-sun-fill dark:text-[#ccc]"></i>
            <i v-if="darkMode" class="ri-moon-clear-fill dark:text-[#ccc]"></i>
          </button>
          <button class="avatar mr-5 w-full">
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
    </div>
  </div>
</template>



<script setup>
import { provide, ref, onMounted, computed } from "vue";
import menuItems from "../menuItems/menuItems.vue";
import messages from "@/features/layout/messages.vue";
import notifications from "@/features/layout/notifications.vue";
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
const darkMode = ref(mode.value == "light" ? false : true);
const stateOfMenu = ref(true);
const stateOfMessages = ref(false);
const stateOfNotifications = ref(false);
const stateOfSearchBar = ref(false);
const changeThemeMode = () => {
  console.log("asdasdasd");
  mode.value = mode.value == "light" ? "dark" : "light";
  darkMode.value = !darkMode.value;
};
const handleMessages = () => {
  stateOfMessages.value = !stateOfMessages.value;
};
const handleNotifications = () => {
  stateOfNotifications.value = !stateOfNotifications.value;
};
const handleSearchBar = () => {
  console.log(handleSearchBar.value);
  stateOfSearchBar.value = !stateOfSearchBar.value;
};
const coin = [
  "BTC/USDT",
  "ETH/USDT",
  "SOL/USDT",
  "AVAX/USDT",
  "XRP/USDT",
  "BTC/USDT",
  "ETH/USDT",
  "SOL/USDT",
  "AVAX/USDT",
  "XRP/USDT",
  "BTC/USDT",
  "ETH/USDT",
  "SOL/USDT",
  "AVAX/USDT",
  "XRP/USDT",
];
const selectedCoin = ref("");
const filteredCoin = computed(() =>
  selectedCoin.value === ""
    ? coin
    : coin.filter((coin) => {
        return coin.toLowerCase().includes(selectedCoin.value.toLowerCase());
      })
);
provide("stateOfMessages", stateOfMessages);
provide("stateOfMenu", stateOfMenu);
onMounted(() => {
  console.log(darkMode.value);
});
</script>
<style lang="scss">
@import "@/config/theme/themeVariables.scss";
* {
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
<style lang="scss" scoped>
.page {
  overflow-x: auto;
}
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
.icon-active {
  color: #e36d85;
}
.messageInactive {
  opacity: 0;
}
.messageActive {
  opacity: 1;
}
</style>