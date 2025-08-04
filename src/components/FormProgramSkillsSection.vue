<script setup lang="ts">
import { PROGRAM_SKILLS_GENERAL_LEVEL_OPTIONS } from "~/constants/programSkillsGeneralLevelOptions";
</script>

<template>
  <div class="space-y-6">
    <SectionLabel label="Знание программ" />

    <div class="space-y-3">
      <h3 class="text-md font-semibold">Microsoft Office</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormSkillCard
          name="programSkills.wordLevel"
          label="MS Word"
          program="MS Word"
        />
        <FormSkillCard
          name="programSkills.excelLevel"
          label="MS Excel"
          program="MS Excel"
        />
        <FormSkillCard
          name="programSkills.powerpointLevel"
          label="MS PowerPoint"
          program="MS PowerPoint"
        />
      </div>
    </div>

    <div class="space-y-3">
      <h3 class="text-md font-semibold">Консультационные системы</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormSkillCard
          name="programSkills.consultantLevel"
          label="Консультант"
          program="Консультант"
        />
        <FormSkillCard
          name="programSkills.garantLevel"
          label="Гарант"
          program="Гарант"
        />
        <FormSkillCard name="programSkills.icLevel" label="1C" program="1C" />
      </div>
    </div>

    <div class="space-y-3">
      <h3 class="text-md font-semibold">Программирование и базы данных</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormSkillCard
          name="programSkills.cppLevel"
          label="C, C++"
          program="C, C++"
        />
        <FormSkillCard
          name="programSkills.sqlLevel"
          label="SQL"
          program="SQL"
        />
        <FormSkillCard
          name="programSkills.cryptoProLevel"
          label="Крипто-про"
          program="Крипто-про"
        />
      </div>
    </div>

    <div class="space-y-3">
      <h3 class="text-md font-semibold">Другие программы</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormSkillCard
          name="programSkills.googleSheetsLevel"
          label="Google-таблицы"
          program="Google-таблицы"
        />
        <FormSkillCard
          name="programSkills.adobeLevel"
          label="Adobe Acrobat"
          program="Adobe Acrobat"
        />
        <FormSkillCard
          name="programSkills.windowsLevel"
          label="Windows"
          program="Windows"
        />
        <FormSkillCard
          name="programSkills.bitrixLevel"
          label="Bitrix24"
          program="Bitrix24"
        />
        <FormSkillCard
          name="programSkills.wtvareLevel"
          label="Wtvare"
          program="Wtvare"
        />
        <FormSkillCard
          name="programSkills.stakhanoveLevel"
          label="Стахановец"
          program="Стахановец"
        />
        <FormSkillCard
          name="programSkills.myWarehouseLevel"
          label="Мой склад"
          program="Мой склад"
        />
      </div>
    </div>

    <FormRadioButtonGroup
      label="Общий уровень владения ПК:"
      name="programSkills.generalLevel"
      :options="PROGRAM_SKILLS_GENERAL_LEVEL_OPTIONS"
    />
  </div>
</template>
