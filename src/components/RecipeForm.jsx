
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createRecipe } from '../models/Recipe'
import { createIngredient } from '../models/Ingredient'
import { createInstruction } from '../models/Instruction'

function RecipeForm({ initialRecipe, onSubmit }) {
    const [recipe, setRecipe] = useState(() =>
        createRecipe(initialRecipe ?? {})
    )
    const [validated, setValidated] = useState(false)

    // Update basic recipe properties
    const handleChange = (e) => {
        const { name, value } = e.target

        setRecipe(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Add an ingredient
    const addIngredient = () => {
        setRecipe(prev => ({
            ...prev,
            ingredients: [
                ...prev.ingredients,
                createIngredient()
            ]
        }))
    }

    // Remove an ingredient
    const removeIngredient = (index) => {
        setRecipe(prev => ({
            ...prev,
            ingredients: prev.ingredients.filter(
                (_, i) => i !== index
            )
        }))
    }

    // Update an ingredient
    const handleIngredientChange = (index, e) => {
        const { name, value } = e.target

        setRecipe(prev => ({
            ...prev,
            ingredients: prev.ingredients.map((ingredient, i) =>
                i === index
                    ? { ...ingredient, [name]: value }
                    : ingredient
            )
        }))
    }

    // Add an instruction
    const addInstruction = () => {
        setRecipe(prev => ({
            ...prev,
            instructions: [
                ...prev.instructions,
                createInstruction({
                    stepNumber: prev.instructions.length + 1
                })
            ]
        }))
    }

    // Remove an instruction and renumber remaining steps
    const removeInstruction = (index) => {
        setRecipe(prev => ({
            ...prev,
            instructions: prev.instructions
                .filter((_, i) => i !== index)
                .map((instruction, i) => ({
                    ...instruction,
                    stepNumber: i + 1
                }))
        }))
    }

    // Update an instruction
    const handleInstructionChange = (index, e) => {
        const { name, value } = e.target

        setRecipe(prev => ({
            ...prev,
            instructions: prev.instructions.map((instruction, i) =>
                i === index
                    ? { ...instruction, [name]: value }
                    : instruction
            )
        }))
    }

    // Submit recipe
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.currentTarget
        setValidated(true)

        if (!form.checkValidity()) return

        const recipeData = {
            ...recipe,
            prepTime: Number(recipe.prepTime),
            cookTime: Number(recipe.cookTime),
            servings: Number(recipe.servings),
            ingredients: recipe.ingredients.map(ingredient => ({
                ...ingredient,
                quantity: Number(ingredient.quantity)
            }))
        }

        onSubmit?.(recipeData)
    }

    // Reset form
    const handleReset = () => {
        setRecipe(createRecipe())
        setValidated(false)
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={9}>
                    <Card className="shadow-sm">
                        <Card.Body className="p-4">
                            <Card.Title as="h1" className="h4 mb-4">
                                {recipe.id ? 'Edit Recipe' : 'Create a New Recipe'}
                            </Card.Title>

                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                                onReset={handleReset}
                            >

                                {/* Basic Recipe Information */}
                                <h5 className="mb-3">Recipe Information</h5>

                                <Row className="g-3">
                                    <Col xs={12}>
                                        <Form.Group controlId="recipeName">
                                            <Form.Label>Recipe Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={recipe.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Recipe name is required.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group controlId="description">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="description"
                                                value={recipe.description}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group controlId="prepTime">
                                            <Form.Label>Prep Time (minutes)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                name="prepTime"
                                                value={recipe.prepTime}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group controlId="cookTime">
                                            <Form.Label>Cook Time (minutes)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                name="cookTime"
                                                value={recipe.cookTime}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group controlId="servings">
                                            <Form.Label>Servings</Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="1"
                                                name="servings"
                                                value={recipe.servings}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group controlId="source">
                                            <Form.Label>Recipe Source</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="source"
                                                value={recipe.source}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <hr className="my-4" />

                                {/* Ingredients */}
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="mb-0">Ingredients</h5>

                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        type="button"
                                        onClick={addIngredient}
                                    >
                                        + Add Ingredient
                                    </Button>
                                </div>

                                {recipe.ingredients.map((ingredient, index) => (
                                    <Card key={ingredient.id ?? index} className="mb-3">
                                        <Card.Body>
                                            <Row className="g-2 align-items-end">
                                                <Col md={3}>
                                                    <Form.Group>
                                                        <Form.Label>Quantity</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            min="0"
                                                            step="any"
                                                            name="quantity"
                                                            value={ingredient.quantity}
                                                            onChange={e =>
                                                                handleIngredientChange(index, e)
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>

                                                <Col md={3}>
                                                    <Form.Group>
                                                        <Form.Label>Unit</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="unit"
                                                            placeholder="cups, tbsp, grams..."
                                                            value={ingredient.unit}
                                                            onChange={e =>
                                                                handleIngredientChange(index, e)
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>

                                                <Col md={4}>
                                                    <Form.Group>
                                                        <Form.Label>Ingredient</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="name"
                                                            value={ingredient.name}
                                                            onChange={e =>
                                                                handleIngredientChange(index, e)
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>

                                                <Col md={2}>
                                                    <Button
                                                        variant="outline-danger"
                                                        className="w-100"
                                                        type="button"
                                                        onClick={() => removeIngredient(index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                </Col>

                                                <Col xs={12}>
                                                    <Form.Group>
                                                        <Form.Label>Section (optional)</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="section"
                                                            placeholder="e.g. For the sauce"
                                                            value={ingredient.section}
                                                            onChange={e =>
                                                                handleIngredientChange(index, e)
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))}

                                {recipe.ingredients.length === 0 && (
                                    <p className="text-muted">
                                        No ingredients added yet.
                                    </p>
                                )}

                                <hr className="my-4" />

                                {/* Instructions */}
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="mb-0">Instructions</h5>

                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        type="button"
                                        onClick={addInstruction}
                                    >
                                        + Add Step
                                    </Button>
                                </div>

                                {recipe.instructions.map((instruction, index) => (
                                    <Card key={instruction.id ?? index} className="mb-3">
                                        <Card.Body>
                                            <Row className="g-2 align-items-start">
                                                <Col xs={2}>
                                                    <Form.Label>
                                                        Step {instruction.stepNumber}
                                                    </Form.Label>
                                                </Col>

                                                <Col xs={8}>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={2}
                                                        name="description"
                                                        placeholder="Describe this step..."
                                                        value={instruction.description}
                                                        onChange={e =>
                                                            handleInstructionChange(index, e)
                                                        }
                                                    />
                                                </Col>

                                                <Col xs={2}>
                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        type="button"
                                                        onClick={() => removeInstruction(index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))}

                                {recipe.instructions.length === 0 && (
                                    <p className="text-muted">
                                        No instructions added yet.
                                    </p>
                                )}

                                <hr className="my-4" />

                                {/* Form Actions */}
                                <div className="d-flex gap-2">
                                    <Button variant="primary" type="submit">
                                        Save Recipe
                                    </Button>

                                    <Button variant="outline-secondary" type="reset">
                                        Reset
                                    </Button>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipeForm
