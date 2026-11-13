function formatMinutes(value) {
    return value !== null && value !== undefined && value !== ''
        ? `${value} min`
        : 'Not specified'
}

function RecipeCardTest({ recipe = {}, onClose }) {
    const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : []
    const instructions = Array.isArray(recipe.instructions) ? recipe.instructions : []
    const sortedInstructions = instructions.slice().sort((first, second) =>
        Number(first.stepNumber || 0) - Number(second.stepNumber || 0)
    )

    return (
        <article className="recipe-card" aria-labelledby="recipe-card-title">
            <header className="recipe-card__header">
                <button
                    className="recipe-card__back"
                    onClick={onClose}
                    type="button"
                >
                    Back to recipe box
                </button>
                <h2 id="recipe-card-title">{recipe.name || 'Untitled recipe'}</h2>
            </header>

            {recipe.description && (
                <p className="recipe-card__description">{recipe.description}</p>
            )}

            <dl className="recipe-card__details">
                <div>
                    <dt>Prep time</dt>
                    <dd>{formatMinutes(recipe.prepTime)}</dd>
                </div>
                <div>
                    <dt>Cook time</dt>
                    <dd>{formatMinutes(recipe.cookTime)}</dd>
                </div>
                <div>
                    <dt>Servings</dt>
                    <dd>
                        {recipe.servings !== null && recipe.servings !== undefined && recipe.servings !== ''
                            ? recipe.servings
                            : 'Not specified'}
                    </dd>
                </div>
            </dl>

            <section className="recipe-card__ingredients" aria-labelledby="recipe-card-ingredients">
                <h3 id="recipe-card-ingredients">Ingredients</h3>
                {ingredients.length > 0 ? (
                    <ul>
                        {ingredients.map((ingredient, index) => {
                            const amount = [ingredient.quantity, ingredient.unit]
                                .filter(value => value !== null && value !== undefined && value !== '')
                                .join(' ')

                            return (
                                <li key={ingredient.id ?? index}>
                                    {amount && <span>{amount} </span>}
                                    {ingredient.name || 'Unnamed ingredient'}
                                    {ingredient.section && (
                                        <span> — {ingredient.section}</span>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <p>No ingredients listed.</p>
                )}
            </section>

            <section className="recipe-card__instructions" aria-labelledby="recipe-card-instructions">
                <h3 id="recipe-card-instructions">Instructions</h3>
                {sortedInstructions.length > 0 ? (
                    <ol>
                        {sortedInstructions.map((instruction, index) => (
                            <li key={instruction.id ?? index}>
                                <strong>Step {instruction.stepNumber || index + 1}:</strong>{' '}
                                {instruction.description || 'No description provided.'}
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p>No instructions listed.</p>
                )}
            </section>

            {recipe.source && (
                <p className="recipe-card__source">
                    <strong>Source:</strong> {recipe.source}
                </p>
            )}
        </article>
    )
}

export default RecipeCardTest
