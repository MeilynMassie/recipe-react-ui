
const API_URL = import.meta.env.VITE_SPRING_BOOT_API

async function getRecipes(token) {
    console.log(`API URL: ${API_URL}`)
    const response = await fetch(`${API_URL}/recipe/1`)
    //     const response = await fetch(`${API_URL}/recipes/1`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })

    if (!response.ok) {
        throw new Error('Failed to fetch recipes')
    }

    return response.json()
}


export default getRecipes
