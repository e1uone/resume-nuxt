import type { RankingFactor } from "~/types/rankingFactors";

export const RANKING_FACTORS: RankingFactor[] = [
  {
    name: "ranking.location",
    label: "Географическая доступность (близость к дому)",
    labelShort: "Географическая доступность",
  },
  {
    name: "ranking.finance",
    label: "Финансовая стабильность (гарантированный доход)",
    labelShort: "Финансовая стабильность",
  },
  {
    name: "ranking.atmosphere",
    label: "Командная атмосфера (отношения в коллективе)",
    labelShort: "Командная атмосфера",
  },
  {
    name: "ranking.growth",
    label: "Профессиональное развитие (самореализация)",
    labelShort: "Профессиональное развитие",
  },
  {
    name: "ranking.workload",
    label: "Рабочая нагрузка (интенсивность работы)",
    labelShort: "Рабочая нагрузка",
  },
  {
    name: "ranking.career",
    label: "Перспективы роста (карьерный рост)",
    labelShort: "Перспективы роста",
  },
  {
    name: "ranking.learning",
    label: "Обучение (получение новых знаний)",
    labelShort: "Обучение",
  },
  {
    name: "ranking.reputation",
    label: "Репутация работодателя (стабильность и престиж компании)",
    labelShort: "Репутация работодателя",
  },
];
