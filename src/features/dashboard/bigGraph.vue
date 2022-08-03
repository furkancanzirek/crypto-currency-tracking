<template>
  <div
    class="
      currencyBigGraph
      w-screen
      sm:w-full
      col-span-2
      lg:col-span-9
      p-3
      sm:p-5
    "
  >
    <div class="extraInformation flex justify-between flex-col sm:flex-row">
      <h1
        class="
          text-white
          font-semibold
          text-2xl
          xl:translate-x-[4.5rem]
          translate-x-0
        "
      >
      {{selectedCoin.name?selectedCoin.name:"Bitcoin"}}  
      </h1>
      <div class="values text-[13px] sm:text-[16px] flex">
        <div class="o text-white mx-2">
          O<span class="text-[#E36D85] ml-1">42373.73 </span>
        </div>
        <div class="h text-white mx-2">
          H<span class="text-[#E36D85] ml-1"
            >{{ selectedCoin.high_24 ? selectedCoin.high_24h : "43079.49" }}
          </span>
        </div>
        <div class="l text-white mx-2">
          L<span class="text-[#E36D85] ml-1"
            >{{ selectedCoin.high_24 ? selectedCoin.low_24h : "41688.49" }}
          </span>
        </div>

        <div class="responsiveRightSide">
          <div class="c text-white mx-2">
            C<span class="text-[#E36D85] ml-1">42373.87 </span>
          </div>
          <div class="Vol text-white mx-2">
            Vol<span class="text-[#E36D85] ml-1">{{kFormatter(selectedCoin.market_cap)?kFormatter(selectedCoin.market_cap):"26.557K"}} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="graph w-full sm:w-full">
      <candleStickChartVue />
    </div>
  </div>
</template>

<script setup>
import candleStickChartVue from "../../components/chart/candleStickChart.vue";
import { watch, ref } from "vue";
import { useSelectedCoinStore } from "../../store/coin/coin.store";
const selectedCoinStore = useSelectedCoinStore();
const selectedCoin = ref({});
const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

watch(
  () => selectedCoinStore.selectedCoin,
  () => {

    selectedCoin.value = selectedCoinStore.selectedCoin;
    
  }
);
</script>