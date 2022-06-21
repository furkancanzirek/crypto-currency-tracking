<template>
  <div>
    <VueApexCharts
      width="500"
      height="110"
      type="area"
      :options="chartOptions"
      :series="props.series"
    ></VueApexCharts>
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";
const props = defineProps({
  series: {
    type: Array,
    default: [
      {
        name: "BTC",
        data: [50, 20, 35, 20, 45, 55, 20, 60],
      },
    ],
  },
  xAxis: {
    type: Array,
    default: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
  positive: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: "Area",
  },
});
const chartOptions = ref({
  chart: {
    id: "vuechart-example",
    background: "",
    toolbar: {
      autoSelected: "pan",
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "",
      opacity: 0.1,
    },
    sparkline: {
      enabled: true,
    },
    brush: {
      enabled: false,
      target: false,
      autoScaleYaxis: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  colors: props.positive ? ["#1C668F"] : ["#752B45"],
  fill: {
    colors: props.positive ? ["#1C668F"] : ["#5C2F37"],
    opacity: 0.5,
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: props.positive ? ["#0B171E"] : ["#251518"],
      inverseColors: false,
      opacityFrom: props.type == "Area" ? 1 : 0,
      opacityTo: props.type == "Area" ? 0.9 : 0,
      stops: (props.type = "Area" ? [0, 100] : [0, 0]),
    },
  },
  xaxis: {
    categories: props.xAxis,
  },
});
const series = ref([
  {
    name: "BTC",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
]);
</script>