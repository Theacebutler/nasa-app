import { get_random_image } from "../services/nasa-api";


export default function Random(props) {

    const { setData, setLoading } = props

    async function get_random_image_from_api() {
        setLoading(true)
        try {
            const data = await get_random_image();
            setData(data)
        } catch(err) {
            console.log(err)
        }
        setLoading(false)
    }

    return (
        <button onClick={
            get_random_image_from_api
        }>
            <i class="fa-solid fa-dice"></i>
        </button>
    )
}