<template>
  <swiper
    :slidesPerView="swiperJSBreakpoint"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :loop="true"
    :grabCursor="true"
    class="
      mySwiper
      currencySmallGraphWrapper
      grid grid-cols-1
      sm:grid-cols-2
      md:grid-cols-4
      gap-4
      lg:gap-4
    "
  >
    <swiper-slide class="bg-green-50" :key="graph" v-for="graph in 12"
      ><smallSliderGraph class="w-full"
    /></swiper-slide>
  </swiper>
</template>


<script setup>
import smallSliderGraph from "@/components/dashboard/smallSliderGraph/smallSliderGraph.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted } from "vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Pagination, Navigation } from "swiper";

const swiperJSBreakpoint = ref(4);
const setBreakpointFromResulation = () => {
  if (window.innerWidth > 1526) {
    swiperJSBreakpoint.value = 4;

    console.log(window.innerWidth);
  } else if (window.innerWidth > 1280 && window.innerWidth < 1526) {
    swiperJSBreakpoint.value = 3;
  } else if (window.innerWidth > 800 && window.innerWidth < 1280) {
    swiperJSBreakpoint.value = 2;
  } else {
    swiperJSBreakpoint.value = 1;
  }
};

onMounted(() => {
  setBreakpointFromResulation();
});
window.addEventListener("resize", setBreakpointFromResulation);
</script>

<style lang="scss">
</style>