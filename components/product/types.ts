import type { Product, Color } from '@/generated/prisma/client';

export type ProductWithColors = Product & { colors: Color[] };