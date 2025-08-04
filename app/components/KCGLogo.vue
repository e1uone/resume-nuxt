<script setup lang="ts">
import KCGLogoDark from "@/assets/img/kcg-logo-full-dark.png";
import KCGLogoLight from "@/assets/img/kcg-logo-full-light.png";

const colorMode = useColorMode();

const logo = computed(() => {
  return colorMode.value === "light" ? KCGLogoDark : KCGLogoLight;
});
</script>

<template>
  <NuxtLink
    to="https://kcg.market/"
    target="_blank"
    class="flex items-center gap-2 cursor-pointer"
  >
    <img :src="logo" alt="KCG Logo" class="w-50" />
  </NuxtLink>
</template>
