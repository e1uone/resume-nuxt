<script setup lang="ts">
import IconLight from "./icons/Light.vue";
import IconDark from "./icons/Dark.vue";
import { useScrollHide } from "~/composables/useScrollHide";

const colorMode = useColorMode();
const { isVisible } = useScrollHide();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>

<template>
  <header
    class="w-full flex justify-between p-2 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 transition-transform duration-300"
    :class="{ 'transform -translate-y-full': !isVisible }"
  >
    <KCGLogo />
    <Button
      variant="ghost"
      size="lg"
      aria-label="Toggle theme"
      @click="toggleTheme"
    >
      <component
        :is="colorMode.value === 'dark' ? IconLight : IconDark"
        class="size-5"
      />
    </Button>
  </header>
</template>
