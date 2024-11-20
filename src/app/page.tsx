// src/app/page.tsx
'use client';

import { useState } from 'react';
import { RecipeForm } from '@/components/RecipeForm';
import { RecipeDisplay } from '@/components/RecipeDisplay';
import { generateRecipe } from '@/lib/api';
import { RecipeResponse } from '@/types/recipe';

export default function Home() {
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (ingredients: string[]) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const generatedRecipe = await generateRecipe(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Recipe Generator</h1>
        
        <div className="mb-8">
          <RecipeForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-8">
            {error}
          </div>
        )}

        {recipe && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <RecipeDisplay recipe={recipe} />
          </div>
        )}
      </div>
    </main>
  );
}