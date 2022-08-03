<template>
  <div class="currencySelect w-screen sm:w-full col-span-2 lg:col-span-3 p-5">
    <div class="w-full h-full">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/10 p-1">
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg  py-2.5 text-sm font-medium leading-5 text-black dark:text-white ',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                darkMode && selected
                  ? 'bg-[#e36d85] shadow'
                  : !darkMode && selected
                  ? 'bg-white text-[#e36d85] hover:text-[#e36d85]'
                  : '',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2 h-[23rem] overflow-scroll overflow-x-hidden">
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            class="rounded-xl dark:bg-black p-3 bg-white"
          >
            <table class="table-auto dark:text-white text-black">
              <thead>
                <tr class="dark:border-b-[0.1rem] dark:border-b-gray-700">
                  <th class="p-3 w-8">#</th>
                  <th class="p-3 w-8">Tokens</th>
                  <th class="p-3 w-1/2">Last Price</th>
                  <th class="p-3 w-8">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="post in posts"
                  :key="post.id"
                  class="
                    dark:border-b-[0.1rem] dark:border-b-gray-800
                    cursor-pointer
                    hover:bg-gray-100 hover:text-black
                    p-5
                  "
                  @click="handleSelectedCoin(post)"
                >
                  <td class="w-8">
                    <img
                      :src="post.image"
                      class="w-8 h-8 rounded-full object-contain"
                      alt=""
                    />
                  </td>
                  <td class="p-5 font-medium" style="text-transform: uppercase">
                    {{ post.symbol }}
                  </td>
                  <td class="p-5 font-medium">{{ post.current_price }}</td>
                  <td class="p-5 font-medium flex">
                    <i
                      v-if="post.market_cap_change_percentage_24h > 0"
                      class="ri-arrow-up-s-fill ml-1 font-bold text-[#1C668F]"
                    ></i>
                    <i
                      v-else
                      class="ri-arrow-down-s-fill ml-1 font-bold text-[red]"
                    ></i>
                    {{ post.price_change_percentage_24h }}%
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <ul>
              <li
                v-for="post in posts"
                :key="post.id"
                class="relative rounded-md p-3 py-5 bg-black hover:bg-gray-800"
              >
                <h3 class="text-sm font-medium leading-5 text-white">
                  {{ post.symbol }}
                </h3>

                <a
                  href="#"
                  :class="[
                    'absolute inset-0 rounded-md',
                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                  ]"
                />
              </li>
            </ul> -->
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref, inject, watch } from "vue";
import {
  useSelectedCoinStore,
  useUSDCoinStore,
  useEURCoinStore,
} from "../../store/coin/coin.store";
const USDCoinStore = useUSDCoinStore();
const EURCoinStore = useEURCoinStore();
const selectedCoinStore = useSelectedCoinStore();
const handleSelectedCoin = (coin) => {
  selectedCoinStore.setSelectedCoin(coin);

};
const darkMode = inject("darkMode");
const categories = ref({
  FAV: [
    {
      id: 1,
      image: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png",
      symbol: "BTC/USDT",
      current_price: "47,575.23",
      price_chance_percentage_24h: -15,
      positive: true,
    },
    {
      id: 2,
      image:
        "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      symbol: "ETH/USDT",
      current_price: "7,575.23",
      price_chance_percentage_24h: "2.35",
      positive: true,
    },
    {
      id: 3,
      image:
        "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
      symbol: "SOL/USDT",
      current_price: "120,25",
      price_chance_percentage_24h: "1.35",
      positive: false,
    },
    {
      id: 4,
      image:
        "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      symbol: "AVAX/USDT",
      current_price: "75.23",
      price_chance_percentage_24h: "2.55",
      positive: false,
    },
    {
      id: 4,
      image:
        "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      symbol: "AVAX/USDT",
      current_price: "75.23",
      price_chance_percentage_24h: "2.55",
      positive: false,
    },
    {
      id: 4,
      image:
        "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      symbol: "AVAX/USDT",
      current_price: "75.23",
      price_chance_percentage_24h: "2.55",
      positive: false,
    },
    {
      id: 4,
      image:
        "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      symbol: "AVAX/USDT",
      current_price: "75.23",
      price_chance_percentage_24h: "2.55",
      positive: false,
    },
  ],
  USDT: [
    {
      id: 1,
      image: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png",
      symbol: "BTC/USDT",
      current_price: "47,575.23",
      price_chance_percentage_24h: "0.32",
      positive: true,
    },
    {
      id: 2,
      image:
        "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      symbol: "ETH/USDT",
      current_price: "7,575.23",
      price_chance_percentage_24h: "2.35",
      positive: true,
    },
    {
      id: 3,
      image:
        "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
      symbol: "SOL/USDT",
      current_price: "120,25",
      price_chance_percentage_24h: "1.35",
      positive: false,
    },
    {
      id: 4,
      image:
        "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      symbol: "AVAX/USDT",
      current_price: "75.23",
      price_chance_percentage_24h: "2.55",
      positive: false,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/USDT",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
  ],
  EUR: [
    {
      id: 1,
      image: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png",
      symbol: "BTC/TRY",
      current_price: "47,575.23",
      price_chance_percentage_24h: "0.32",
      positive: true,
    },
    {
      id: 2,
      image:
        "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      symbol: "ETH/TRY",
      current_price: "7,575.23",
      price_chance_percentage_24h: "2.35",
      positive: true,
    },
    {
      id: 3,
      image:
        "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
      symbol: "SOL/TRY",
      current_price: "120,25",
      price_chance_percentage_24h: "1.35",
      positive: false,
    },
    {
      id: 4,
      image:
        "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      symbol: "AVA/TRYX",
      current_price: "75.23",
      price_chance_percentage_24h: "2.55",
      positive: false,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
    {
      id: 5,
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      symbol: "XRP/TRY",
      current_price: "5.23",
      price_chance_percentage_24h: "4.55",
      positive: true,
    },
  ],
});

watch(
  () => USDCoinStore.getUSDCoins,
  () => {
    categories.value.USDT = USDCoinStore.getUSDCoins;
  }
);

watch(
  () => EURCoinStore.getEURCoins,
  () => {
    categories.value.EUR = EURCoinStore.getEURCoins;
    categories.value.FAV = EURCoinStore.getEURCoins;
  }
);
</script>