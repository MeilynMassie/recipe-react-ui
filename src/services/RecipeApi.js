import { SPRING_API_URL } from '../services/Constants'


export async function getRecipes(token) {
    console.log(`API URL: ${SPRING_API_URL}`)
    const response = await fetch(`${SPRING_API_URL}/recipe/1`)
    //     const response = await fetch(`${API_URL}/recipes/1`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })

    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }

    return response.json();
}