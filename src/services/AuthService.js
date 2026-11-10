import { SPRING_API_URL } from '../services/Constants'

export async function verifyUser(user, password) {
    console.log(`URL: ${SPRING_API_URL}/auth/login`);
    console.log(`Verifying User: ${user} with password ${password}`);
    const response = await fetch(`${SPRING_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: user,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error('Incorrect username/email/password');
    }

    return response.json();
}