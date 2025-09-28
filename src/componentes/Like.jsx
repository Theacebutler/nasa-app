import { useState } from 'react'
import '../css/Like.css'

export default function Like() {
    const [fav, setFav] = useState(false)
    const like = () => {
        // switch the fav var
        setFav(!fav)
        // add the image to a 'liked' collection in local storeg
    }
    return (
        <button
            onClick={like} className={`${fav ? 'active' : ''}`}>
            <i className="fa-solid fa-heart"></i>
        </button>
    )
}