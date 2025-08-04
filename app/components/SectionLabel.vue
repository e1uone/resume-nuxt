<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
interface Props {
  label: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <p class="text-lg">{{ props.label }}</p>
    <Separator />
  </div>
</template>
