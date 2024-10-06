<template>
  <div class="p-10">
    {{ color }}
    <ColorPicker v-model="color" inline />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ColorPicker from "primevue/colorpicker";

const color = ref(null);
</script>
