import { useState } from 'react'
import RecipeCardTest from './RecipeCardTest'
import './RecipeBoxTest.css'
import recipeBoxImage from '../../assets/images/recipebox.jpg'

const MAX_CARDS_IN_BOX = 8
const RECIPES_PER_PAGE = 8

function RecipeBoxTest({ recipes = [] }) {
    const [visibleMoreCount, setVisibleMoreCount] = useState(0)
    const [selectedRecipe, setSelectedRecipe] = useState(null)
    const recipeList = Array.isArray(recipes) ? recipes : []
    const recipesInBox = recipeList.slice(0, MAX_CARDS_IN_BOX)
    const additionalRecipes = recipeList.slice(
        MAX_CARDS_IN_BOX,
        MAX_CARDS_IN_BOX + visibleMoreCount
    )

    return (
        <section className="recipe-box" aria-labelledby="recipe-box-title">
            <header className="recipe-box__header">
                <h2 id="recipe-box-title">Your Recipe Box</h2>
                <p>{recipeList.length} {recipeList.length === 1 ? 'recipe' : 'recipes'}</p>
            </header>

            <div className="recipe-box__scene">
                <img
                    className="recipe-box__image"
                    src={recipeBoxImage}
                    alt="Open wooden recipe box"
                />
                <div className="recipe-box__contents" aria-label="Recipes in the box">
                    {recipeList.length === 0 ? (
                        <p className="recipe-box__empty">Your recipe box is empty.</p>
                    ) : (
                        recipesInBox.map((recipe, index) => (
                            <button
                                className="recipe-box__card"
                                key={recipe.id ?? `${recipe.name || 'recipe'}-${index}`}
                                onClick={() => setSelectedRecipe(recipe)}
                                type="button"
                                aria-label={`Open recipe: ${recipe.name || 'Untitled recipe'}`}
                            >
                                <span className="recipe-box__card-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="recipe-box__card-name">
                                    {recipe.name || 'Untitled recipe'}
                                </span>
                            </button>
                        ))
                    )}
                </div>
                <img
                    className="recipe-box__front"
                    src={recipeBoxImage}
                    alt=""
                    aria-hidden="true"
                />
            </div>

            {selectedRecipe && (
                <RecipeCardTest
                    recipe={selectedRecipe}
                    onClose={() => setSelectedRecipe(null)}
                />
            )}

            {!selectedRecipe && additionalRecipes.length > 0 && (
                <div className="recipe-box__more">
                    <h3>More recipes</h3>
                    <div className="recipe-box__more-list">
                        {additionalRecipes.map((recipe, index) => (
                            <button
                                className="recipe-box__more-card"
                                key={recipe.id ?? `${recipe.name || 'recipe'}-${index + MAX_CARDS_IN_BOX}`}
                                onClick={() => setSelectedRecipe(recipe)}
                                type="button"
                            >
                                {recipe.name || 'Untitled recipe'}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {!selectedRecipe && MAX_CARDS_IN_BOX + visibleMoreCount < recipeList.length && (
                <button
                    className="recipe-box__view-more"
                    onClick={() => setVisibleMoreCount(count => count + RECIPES_PER_PAGE)}
                    type="button"
                >
                    View more recipes ({recipeList.length - MAX_CARDS_IN_BOX - visibleMoreCount} remaining)
                </button>
            )}

            {!selectedRecipe && visibleMoreCount > 0 && (
                <button
                    className="recipe-box__view-less"
                    onClick={() => setVisibleMoreCount(0)}
                    type="button"
                >
                    Show only the recipes in the box
                </button>
            )}
        </section>
    )
}

export default RecipeBoxTest