<template>
  <div
    class="
      currencySmallGraphWrapper
      grid grid-cols-1
      sm:grid-cols-2
      md:grid-cols-4
      gap-4
      lg:gap-4
    "
  >
    <smallSliderGraph />
  </div>
  <div
    class="currencyBigGraphWrapper grid col-span-2 lg:grid-cols-12 mt-5 h-"
  >
    <bigGraph />
    <currencySelector />
  </div>
  <div class="marketingValues grid grid-col-2 mt-5 h-2/6">
    <marketingValues />
  </div>
</template>
<script setup>
import smallSliderGraph from "../../features/dashboard/smallSliderGraph.vue";
import bigGraph from "../../features/dashboard/bigGraph.vue";
import currencySelector from "../../features/dashboard/currencySelector.vue";
import marketingValues from "../../features/dashboard/marketingValues.vue"
</script>