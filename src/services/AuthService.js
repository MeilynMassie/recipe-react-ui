import { SPRING_API_URL } from '../services/Helpers'


// Login can be email or username
export async function verifyChef(login, password) {
    console.log(`Verifying Chef ${login}...`);
    const response = await fetch(`${SPRING_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error('Incorrect username/email/password');
    }

    console.log(`Verified Chef ${login}!`);
    return response.json();
}


export async function createChef(username, email, password) {
    console.log(`Creating Chef ${username} account...`);
    const response = await fetch(`${SPRING_API_URL}/chef`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error('New chef was not created');
    }
    console.log(`Chef ${username} added!`);
    return response.json();
}