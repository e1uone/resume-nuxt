<script setup lang="ts">
import { useFieldArray } from "vee-validate";
import FormRankingCard from "~/components/FormRankingCard.vue";
import Input from "~/components/ui/input/Input.vue";
import Button from "~/components/ui/button/Button.vue";
import { ref } from "vue";
import { RANKING_FACTORS } from "~/constants/rankingFactors";

const { fields, push, remove } = useFieldArray<{ label: string; rank: string }>(
  "ranking.dynamic",
);

const addFactorLabel = ref("");

const addFactor = () => {
  if (!addFactorLabel.value.trim()) return;
  push({ label: addFactorLabel.value.trim(), rank: "" });
  addFactorLabel.value = "";
};
</script>

<template>
  <div class="space-y-3">
    <SectionLabel
      label="Проранжируйте важность факторов (1 – наиболее важный, 8 – наименее важный)"
    />

    <div class="grid gap-4 sm:grid-cols-1">
      <FormRankingCard
        v-for="f in RANKING_FACTORS"
        :key="f.name"
        :name="f.name"
        :label="f.label"
      />
    </div>

    <div class="space-y-4">
      <h4 class="text-sm font-medium">Дополнительные факторы</h4>
      <div v-auto-animate class="space-y-3">
        <FormRankingCard
          v-for="(field, idx) in fields"
          :key="field.key"
          :name="`ranking.dynamic[${idx}].rank`"
          :label="field.value.label"
          removable
          @remove="remove(idx)"
        />
      </div>
      <div class="flex items-center gap-2">
        <Input
          v-model="addFactorLabel"
          placeholder="Новый фактор"
          class="flex-1"
        />

        <Button type="button" @click="addFactor">Добавить</Button>
      </div>
    </div>
  </div>
</template>
