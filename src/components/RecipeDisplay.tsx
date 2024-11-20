// src/components/RecipeDisplay.tsx
import { RecipeResponse } from '@/types/recipe';

interface RecipeDisplayProps {
  recipe: RecipeResponse;
}

export function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
