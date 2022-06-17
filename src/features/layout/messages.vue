<template>
  <div class="messagesBox">
    <message v-for="message in 15" />

  </div>
</template>

<script setup>
import message from "@/components/layout/messages/message.vue";
</script>