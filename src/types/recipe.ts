export interface RecipeRequest {
  ingredients: string[];
}

export interface RecipeResponse {
  title: string;
  ingredients: string[];
  instructions: string[];
}
