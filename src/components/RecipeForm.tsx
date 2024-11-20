// src/components/RecipeForm.tsx
import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface RecipeFormProps {
  onSubmit: (ingredients: string[]) => void;
  isLoading: boolean;
}

export function RecipeForm({ onSubmit, isLoading }: RecipeFormProps) {
  const [ingredients, setIngredients] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredientList = ingredients
      .split(',')
      .map(i => i.trim())
      .filter(i => i);
    onSubmit(ingredientList);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ingredients (comma-separated)
        </label>
        <Input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="tomatoes, pasta, olive oil"
          disabled={isLoading}
          className="mt-1"
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Recipe'}
      </Button>
    </form>
  );
}
