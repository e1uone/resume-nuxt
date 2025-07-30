<script setup lang="ts">
import IconLight from "./icons/Light.vue";
import IconDark from "./icons/Dark.vue";

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>

<template>
  <header class="w-full flex justify-between p-2">
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
