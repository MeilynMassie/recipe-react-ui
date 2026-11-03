export function createIngredient({
    id = null,
    recipeId = null,
    quantity = 0,
    unit = '',
    name = '',
    section = ''
} = {}) {
    return {
        id,
        recipeId,
        quantity,
        unit,
        name,
        section
    }
}