import { useEffect, useState } from 'react'
import { useLikedContexts } from '../contexts/LikedContexts'
import '../css/Like.css'



export default function Like(props) {
    const { data } = props
    const { addToLiked, removeFromLiked, isLiked, setFav } = useLikedContexts()
    const liked = isLiked(data)

    const handelLikeClick = (e) => {
        e.preventDefault()
        if (liked) removeFromLiked(data)
        else {
            addToLiked(data)
        }
        // add the image to a 'liked' collection in localStoreg
    }
    useEffect(() => {
        isLiked(data)
    }, [])

    return (
        <button
            onClick={handelLikeClick} className={`${liked ? 'active' : ''}`}>
            <i className="fa-solid fa-heart"></i>
        </button>
    )
}