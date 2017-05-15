import fetch from 'isomorphic-fetch';

const authorizedConfig = (method, token) => ({
    headers: {
        method: method,
        'Authorization': token,
        'Content-Type':'application/json'
    }
});

const postConfig = (body) => ({
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type':'application/json'
    }
});

export function loginApi(user) {
    return fetch('http://localhost:3001/api/users/authenticate', postConfig(user));
}

export function registerApi(user) {
    return fetch('http://localhost:3001/api/users/register', postConfig(user));
}

export function validateToken(token) {
    return fetch('http://localhost:3001/api/users/validate', authorizedConfig('GET', token));
}

export function loadQuotes(query, token) {
    return fetch('http://localhost:3001/api/stocks/find?query=' + query, authorizedConfig('GET', token));
}
export function loadQuoteData(query, token) {
    return fetch('http://localhost:3001/api/stocks/quote?query=' + query, authorizedConfig('GET', token));
}
export function loadQuoteDataHistory(query, time, token) {
    return fetch('http://localhost:3001/api/stocks/quote/history?query=' + query + '&time=' +time, authorizedConfig('GET', token));
}