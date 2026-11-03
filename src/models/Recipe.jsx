import { createIngredient } from './Ingredient'
import { createInstruction } from './Instruction'

export function createRecipe({
    id = null,
    name = '',
    description = '',
    prepTime = 0,
    cookTime = 0,
    servings = 0,
    source = '',
    ingredients = [],
    instructions = []
} = {}) {
    return {
        id,
        name,
        description,
        prepTime,
        cookTime,
        servings,
        source,
        ingredients: ingredients.map(createIngredient),
        instructions: instructions.map(createInstruction)
    }
}