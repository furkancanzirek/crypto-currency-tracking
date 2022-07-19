<template>
  <div class="currencyBigGraph col-span-2 lg:col-span-9 p-3 sm:p-5">
    <div class="extraInformation flex justify-between flex-col sm:flex-row">
      <h1 class="text-white font-semibold text-2xl xl:translate-x-[4.5rem] translate-x-0">
        BTC/USDT - 1 Week
      </h1>
      <div class="values flex">
        <div class="o text-white mx-2">
          O<span class="text-[#E36D85] ml-1">42373.73 </span>
        </div>
        <div class="h text-white mx-2">
          H<span class="text-[#E36D85] ml-1">43079.49 </span>
        </div>
        <div class="l text-white mx-2">
          L<span class="text-[#E36D85] ml-1">41688.88 </span>
        </div>
        
        <div class="responsiveRightSide ">
          <div class="c text-white mx-2">
            C<span class="text-[#E36D85] ml-1">42373.87 </span>
          </div>
          <div class="Vol text-white mx-2">
            Vol<span class="text-[#E36D85] ml-1">26.557K </span>
          </div>
        </div>
      </div>
    </div>
    <div class="graph w-full">
      <candleStickChartVue  />
    </div>
  </div>
</template>

<script setup>
import candleStickChartVue from "../../components/chart/candleStickChart.vue";
new Date(new Date().getTime() - 24*60*60*1000*2)
</script>