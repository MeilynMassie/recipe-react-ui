import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router'

function RecipeCard({ recipe }) {
    return (
        <Card className="h-100 shadow-sm">
            {recipe.imageUrl && (
                <Card.Img
                    variant="top"
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
            )}

            <Card.Body className="d-flex flex-column">
                <Card.Title>{recipe.name}</Card.Title>

                <Card.Text>
                    {recipe.description || 'No description available.'}
                </Card.Text>

                <div className="d-flex flex-wrap gap-2 mb-3">
                    <Badge bg="secondary">
                        Prep: {recipe.prepTime} min
                    </Badge>

                    <Badge bg="secondary">
                        Cook: {recipe.cookTime} min
                    </Badge>

                    <Badge bg="secondary">
                        Servings: {recipe.servings}
                    </Badge>
                </div>

                <Card.Text>
                    <small className="text-muted">
                        {recipe.ingredients?.length ?? 0} ingredients
                    </small>
                </Card.Text>

                <div className="mt-auto">
                    <Button
                        as={Link}
                        to={`/recipes/${recipe.id}`}
                        variant="primary"
                    >
                        View Recipe
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard