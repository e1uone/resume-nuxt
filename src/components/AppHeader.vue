<script setup lang="ts">
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
      size="sm"
      aria-label="Toggle theme"
      @click="toggleTheme"
    >
      <IconLight v-if="colorMode.value === 'dark'" />
      <IconDark v-else />
    </Button>
  </header>
</template>
