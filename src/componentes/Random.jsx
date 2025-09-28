import { useEffect } from "react";
import { get_random_image } from "../services/nasa-api";


export default function Random(props) {

    const { setData } = props

    async function get_random_image_from_api() {
        try {
            const data = await get_random_image();
            setData(data)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <button onClick={
            get_random_image_from_api
        }>
            <i class="fa-solid fa-dice"></i>
        </button>
    )
}