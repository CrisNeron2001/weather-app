export const config = {
    backendUrl: import.meta.env.VITE_BACKEND_URL,
    apiKey: import.meta.env.VITE_API_KEY 
}

console.log("backend", config.backendUrl);
console.log("apiKey", config.apiKey);