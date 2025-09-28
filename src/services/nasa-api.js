const API_KEY = import.meta.env.VITE_NASA_API_KEY
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
const random = '&count=1'


export async function get_image() {
    const respone = await fetch(url);
    const data = await respone.json()
    return data
}


export async function get_random_image() {
    const respone = await fetch(`${url}${random}`);
    const data = await respone.json();
    return data[0]
} 



// TODO add a api to get a image based on the date

export async function get_image_with_date(date) {
    const respone = await fetch(url + '&date=' + date);
    const data = await respone.json()
    return data
}