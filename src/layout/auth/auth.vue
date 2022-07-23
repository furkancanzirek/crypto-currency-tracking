<script setup>
</script>


<template>
  <div
    class="
      authContainer
      min-h-screen
      bg-gray-100
      text-gray-900
      flex
      justify-center
    "
  >
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.authContainer {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>