<template>
  <div class="notificationBox h-72" >
    <notification v-for="notification in 15 "/>

  </div>
</template>

<script setup>
import notification from "../../components/layout/notifications/notification.vue";

</script>