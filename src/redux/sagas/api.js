const HOSTNAME = 'https://reqres.in';

export function getUser() {
    return fetch(`${HOSTNAME}/api/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            return res.json()
        })
        .then(payload => {
            return payload
        });
}

export function getUserById(credentials) {
    return fetch(`${HOSTNAME}/api/users/` + credentials, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            return res.json()
        })
        .then(payload => {
            return payload
        });
}