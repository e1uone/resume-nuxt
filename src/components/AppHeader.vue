<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <header class="w-full flex justify-end mb-4 p-2">
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      @click="toggleTheme"
    >
      <IconLight v-if="theme === 'dark'" />
      <IconDark v-else />
    </Button>
  </header>
</template>
