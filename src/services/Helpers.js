const SPRING_API_BASE_URL = import.meta.env.VITE_SPRING_API_BASE_URL
const SPRING_API_VERSION = import.meta.env.VITE_SPRING_API_VERSION

export const SPRING_API_URL = `${SPRING_API_BASE_URL}/${SPRING_API_VERSION}`

export function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}