<template>
  <div class="page w-full h-screen dark:bg-black">
    <div class="navbar text-black dark:text-white dark:bg-black">
      <div
        class="
          topNavbar
          pt-2
          flex
          w-full
          justify-between
          border-b
          dark:border-black dark:bg-black
          bg-white
          fixed
          top-0
          z-[50]
        "
      >
        <div class="topNavbarLeft flex items-center">
          <div class="logo flex items-center w-30 sm:w-60">
            <img
              class="h-20 sm:h-24 ml-0 lg:ml-3"
              src="/static/img/layout/logo.png"
              alt=""
            />
            <h1 class="text-lg hidden sm:inline sm:text-xl font-semibold">
              QuickCrypto
            </h1>
          </div>
          <h2 class="text-xl sm:text-3xl font-bold ml-1 sm:ml-20">Dashboard</h2>
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
              v-if="stateOfSearchBar"
            >
              <div
                class="
                  messageBox
                  flex
                  hover:bg-stone-100
                  dark:hover:bg-stone-800
                  p-4
                  m-1
                  rounded-md
                  cursor-pointer
                "
                v-for="coin in filteredCoin"
                :key="coin"
                :value="coin"
                @mousedown="handleSelectedCoin(coin)"
              >
                <img
                  class="w-12 h-12 rounded-full object-contain"
                  :src="coin.image"
                  alt=""
                />
                <div class="content ml-2 flex flex-col justify-end">
                  <div class="name font-bold" style="text-transform: uppercase">
                    {{ coin.symbol }}
                  </div>
                  <div class="priceWrapper flex">
                    <div class="price font-medium">
                      {{ coin.current_price }}
                    </div>
                    <div
                      class="
                        ratio
                        ml-5
                        flex
                        items-center
                        font-medium
                        justify-center
                      "
                    >
                      {{ coin.market_cap_change_percentage_24h }} %
                      <i
                        v-if="coin.market_cap_change_percentage_24h > 0"
                        class="ri-arrow-up-s-fill ml-1 font-bold text-[#00B786]"
                      ></i>
                      <i
                        v-else
                        class="ri-arrow-down-s-fill ml-1 font-bold text-[red]"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Menu as="div" class="relative inline-block text-left mr-5">
            <div>
              <MenuButton class="">
                <button class="notification">
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
                <button class="messages">
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

          <button @click="changeThemeMode" class="darkMode mr-5">
            <i v-if="!darkMode" class="ri-sun-fill dark:text-[#ccc]"></i>
            <i v-if="darkMode" class="ri-moon-clear-fill dark:text-[#ccc]"></i>
          </button>
          <button class="avatar mr-5 w-full">
            <img
              class="h-12 w-12 rounded-full"
              src="/static/img/layout/avatar.jpg"
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
          bg-white
          fixed
          top-[5.4rem]
          sm:top-[6.5rem]
          z-40
          h-screen
        "
      >
        <menuItems />
      </div>
      <div
        class="
          content
          translate-x-16 translate-y-28
          right-0
          z-[1]
          h-full
          text-black
          top-28
          px-2
        "
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>



<script setup>
import { provide, ref, onMounted, computed, watch } from "vue";
import menuItems from "../menuItems/menuItems.vue";
import messages from "../../features/layout/messages.vue";
import notifications from "../../features/layout/notifications.vue";
import { useColorMode } from "@vueuse/core";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  InboxIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
import {
  getAllCryptoDetailsUSD,
  getAllCryptoDetailsEUR,
} from "../../services/cryptoService";
import {
  useSelectedCoinStore,
  useUSDCoinStore,
  useEURCoinStore,
} from "../../store/coin/coin.store";
const mode = useColorMode();
const darkMode = ref(mode.value == "light" ? false : true);
const stateOfMenu = ref(true);
const stateOfMessages = ref(false);
const stateOfNotifications = ref(false);
const stateOfSearchBar = ref(false);
const selectedCoinStore = useSelectedCoinStore();
const USDCoinStore = useUSDCoinStore();
const EURCoinStore = useEURCoinStore();
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
const selectedCoin = ref("");
const filteredCoin = computed(() =>
  selectedCoin.value === ""
    ? allCryptoDatasUSD.value
    : allCryptoDatasUSD.value.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(selectedCoin.value.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(selectedCoin.value.toLowerCase())
        );
      })
);
const handleSelectedCoin = (coin) => {
  console.log(coin);
  selectedCoinStore.setSelectedCoin(coin);
  console.log("merhaba");
};
const changeBigGraph = () => {};
const allCryptoDatasUSD = ref([]);
const allCryptoDatasEUR = ref([]);
const getCryptoDatas = async () => {
  allCryptoDatasUSD.value = await getAllCryptoDetailsUSD();
  USDCoinStore.setUSDCoins(await getAllCryptoDetailsUSD());
  EURCoinStore.setEURCoins(await getAllCryptoDetailsEUR());
  allCryptoDatasEUR.value = await getAllCryptoDetailsEUR();
};

const cryptoSelectorData = ref([]);
provide("stateOfMessages", stateOfMessages);
provide("stateOfMenu", stateOfMenu);
provide("allCryptoDatasUSD", allCryptoDatasUSD);
provide("allCryptoDatasEUR", allCryptoDatasEUR);

onMounted(() => {
  console.log(darkMode.value);
  getCryptoDatas();
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
  min-height: calc(100% - 105px);
  width: calc(100vw - 100px);
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