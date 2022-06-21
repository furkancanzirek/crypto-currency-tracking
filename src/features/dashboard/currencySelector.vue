<template>
  <div class="currencySelect col-span-2 lg:col-span-3 p-5">
    <div class="w-full h-full">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg  py-2.5 text-sm font-medium leading-5 text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-[#e36d85] shadow'
                  : 'bg-black text-blue-100 hover:bg-white/[0.12] hover:text-white',
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
            :class="['rounded-xl bg-black p-3', ,]"
          >
            <table class="table-auto text-white">
              <thead>
                <tr class="border-b-[0.1rem] border-b-gray-700">
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
                  class="border-b-[0.1rem] border-b-gray-800 cursor-pointer hover:bg-gray-100 hover:text-black p-5"
                >
                  <td class="w-8">
                    <img
                      :src="post.img"
                      class="w-8 h-8 rounded-full object-contain"
                      alt=""
                    />
                  </td>
                  <td class="p-5 font-medium ">{{ post.title }}</td>
                  <td class="p-5 font-medium">{{ post.lastPrice }}</td>
                  <td class="p-5 font-medium">{{ post.change }}</td>
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
                  {{ post.title }}
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
import { ref } from "vue";
const categories = ref({
  FAV: [
    {
      id: 1,
      img: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png",
      title: "BTC/USDT",
      lastPrice: "47,575.23",
      change: "0.32",
      positive: true,
    },
    {
      id: 2,
      img: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      title: "ETH/USDT",
      lastPrice: "7,575.23",
      change: "2.35",
      positive: true,
    },
    {
      id: 3,
      img: "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
      title: "SOL/USDT",
      lastPrice: "120,25",
      change: "1.35",
      positive: false,
    },
    {
      id: 4,
      img: "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      title: "AVAX/USDT",
      lastPrice: "75.23",
      change: "2.55",
      positive: false,
    },
    {
      id: 4,
      img: "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      title: "AVAX/USDT",
      lastPrice: "75.23",
      change: "2.55",
      positive: false,
    },
    {
      id: 4,
      img: "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      title: "AVAX/USDT",
      lastPrice: "75.23",
      change: "2.55",
      positive: false,
    },
    {
      id: 4,
      img: "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      title: "AVAX/USDT",
      lastPrice: "75.23",
      change: "2.55",
      positive: false,
    },
  ],
  USDT: [
    {
      id: 1,
      img: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png",
      title: "BTC/USDT",
      lastPrice: "47,575.23",
      change: "0.32",
      positive: true,
    },
    {
      id: 2,
      img: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      title: "ETH/USDT",
      lastPrice: "7,575.23",
      change: "2.35",
      positive: true,
    },
    {
      id: 3,
      img: "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
      title: "SOL/USDT",
      lastPrice: "120,25",
      change: "1.35",
      positive: false,
    },
    {
      id: 4,
      img: "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      title: "AVAX/USDT",
      lastPrice: "75.23",
      change: "2.55",
      positive: false,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/USDT",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
  ],
  TRY: [
      {
      id: 1,
      img: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png",
      title: "BTC/TRY",
      lastPrice: "47,575.23",
      change: "0.32",
      positive: true,
    },
    {
      id: 2,
      img: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      title: "ETH/TRY",
      lastPrice: "7,575.23",
      change: "2.35",
      positive: true,
    },
    {
      id: 3,
      img: "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
      title: "SOL/TRY",
      lastPrice: "120,25",
      change: "1.35",
      positive: false,
    },
    {
      id: 4,
      img: "https://styles.redditmedia.com/t5_3itf3/styles/communityIcon_17n3srnx2ta71.png?width=256&s=581b6101fa8302de0542ba0737d654385e16eda9",
      title: "AVA/TRYX",
      lastPrice: "75.23",
      change: "2.55",
      positive: false,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
    {
      id: 5,
      img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ripple-XRP-icon.png",
      title: "XRP/TRY",
      lastPrice: "5.23",
      change: "4.55",
      positive: true,
    },
  ],
});
</script>