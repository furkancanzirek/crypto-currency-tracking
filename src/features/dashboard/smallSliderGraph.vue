<template>
  <smallSliderGraph :key="graph" v-for="graph in 4" />
</template>


<script setup>
import smallSliderGraph from "@/components/dashboard/smallSliderGraph/smallSliderGraph.vue";
</script>