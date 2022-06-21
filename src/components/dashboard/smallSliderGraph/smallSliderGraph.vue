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
        <span class="font-semibold">BTC</span>
        <i class="ri-arrow-up-fill text-[#29A5E9] translate-x-1"></i>
        <i
          class="
            ri-arrow-down-fill
            text-[#E36D85]
            -translate-x-[0.32rem]
            translate-y-[0.1rem]
          "
        ></i>
        <span class="font-semibold">USD</span>
      </div>
      <div class="price mt-3 text-3xl font-bold">$44,347</div>
    </div>
    <span class="currencyRatio text-[#D3657C] font-semibold translate-x-5"> -10.12% </span>
    <div class="absolute bottom-0"><chart :positive="false" /></div>
  </div>
</template>

<script setup>
import chart from "@/components/chart/chart.vue";

</script>