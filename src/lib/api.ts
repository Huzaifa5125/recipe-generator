// src/lib/api.ts
import { RecipeRequest, RecipeResponse } from '@/types/recipe';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://huggingface.co/spaces/EmTpro01/reciper-generation';

export async function generateRecipe(ingredients: string[]): Promise<RecipeResponse> {
  const response = await fetch(`${API_URL}/generate-recipe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate recipe');
  }

  return response.json();
}
