<template>
<smallSliderGraph />

  <div class="currencyBigGraphWrapper grid col-span-2 lg:grid-cols-12 mt-5 h-">
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
import marketingValues from "../../features/dashboard/marketingValues.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
</script>