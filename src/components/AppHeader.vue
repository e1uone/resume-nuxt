<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
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
      <IconLight v-if="colorMode.preference === 'dark'" />
      <IconDark v-else />
    </Button>
  </header>
</template>
