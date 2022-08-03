<template>
  <div 
    class="
      currencySmallGraph
      bg-white
      dark:bg-black
      h-56
      flex
      dark:text-white
      justify-between
      p-8
    "

  >
    <div class="currencyType">
      <div class="flex">
        <span class="font-semibold" style="text-transform: uppercase">{{
          coin.symbol
        }}</span>
        <i class="ri-arrow-up-fill text-[#29A5E9] translate-x-1"></i>
        <i
          class="
            ri-arrow-down-fill
            text-[#E36D85]
            -translate-x-[0.32rem]
            translate-y-[0.1rem]
          "
        ></i>
        <span class="font-semibold"></span>
      </div>
      <div class="price mt-3 text-3xl font-bold">{{ coin.current_price }}</div>
    </div>
    <span
      class="currencyRatio  font-semibold translate-x-5"
      :class="{
        'text-[#D3657C]': coin.price_change_percentage_24h < 0,
        'text-[#29A5E9]': coin.price_change_percentage_24h > 0,
      }"
    >
      {{ coin.price_change_percentage_24h }}%
    </span>
    <div class="absolute bottom-3">
      <chart :positive="coin.price_change_percentage_24h > 0" :coin="coin" />
    </div>
  </div>
</template>

<script setup>
import chart from "@/components/chart/chart.vue";
import { watch } from "vue";
const props = defineProps({
  coin: Object,
});
watch(
  () => props.coin,
  () => {

  }
);
</script>