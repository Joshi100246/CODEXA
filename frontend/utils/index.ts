// utils/index.ts
export const formatDate = (date: Date) => date.toISOString();
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
