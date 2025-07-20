import type { RankingFactor } from "~/types/rankingFactors";

export const RANKING_FACTORS: RankingFactor[] = [
  {
    name: "ranking.location",
    label: "Географическая доступность (близость к дому)",
  },
  {
    name: "ranking.finance",
    label: "Финансовая стабильность (гарантированный доход)",
  },
  {
    name: "ranking.atmosphere",
    label: "Командная атмосфера (отношения в коллективе)",
  },
  {
    name: "ranking.growth",
    label: "Профессиональное развитие (самореализация)",
  },
  {
    name: "ranking.workload",
    label: "Рабочая нагрузка (интенсивность работы)",
  },
  { name: "ranking.career", label: "Перспективы роста (карьерный рост)" },
  { name: "ranking.learning", label: "Обучение (получение новых знаний)" },
  {
    name: "ranking.reputation",
    label: "Репутация работодателя (стабильность и престиж компании)",
  },
];
