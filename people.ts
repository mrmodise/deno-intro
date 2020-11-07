// Simple HTTP GET request
export const getPeople = async (url: string) => {
    return fetch(url).then(response => response.json()).catch(onerror => onerror);
}
