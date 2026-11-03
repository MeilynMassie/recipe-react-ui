export function createInstruction({
    id = null,
    recipeId = null,
    stepNumber = 0,
    description = ''
} = {}) {
    return {
        id,
        recipeId,
        stepNumber,
        description
    }
}