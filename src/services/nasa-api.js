const API_KEY = import.meta.env.VITE_NASA_API_KEY
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`
// const url = 'https://api.nasa.gov/planetary/apod?api_key=68DKxS7k97UVu1jHYx1y5VkGD5kvq3oYy4l0Pi1H&count=1'


export async function get_image() {
    const respone = await fetch(url);
    const data = await respone.json()
    return data[0]
}