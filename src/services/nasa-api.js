const API_KEY = import.meta.env.VITE_NASA_API_KEY
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`


export async function get_image() {
    const respone = await fetch(url);
    const data = await respone.json()
    return data
}


export async function get_random_image() {
    const respone = await fetch(url + '&connt=1');
    const data = await respone.json();
    return data[0]
} 