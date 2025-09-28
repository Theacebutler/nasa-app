import { useEffect, useState } from 'react'
import '../css/LikedImages.css'
import { get_image_with_date } from '../services/nasa-api'
import LikedImage from './LikedImage'




export default function LikedImages(props) {

    const { liked } = props
    const [images, setImages] = useState([])


    useEffect(() => {
        if (!liked) return
        get_image_with_date(liked).then(data => {
            setImages((images)=> [...images, data])
        }).catch(err => {
            console.log(err)
        })
    }, [liked])

    return (
        <div className='liked-images'>
            <h2>Your Favorite Images</h2>
            {images ? (
                <div className="images">
                {
                    images.map((image, index)=> (
                        <LikedImage image={image} index={index}/>
                    ))
                }
                </div>
            ) : (
                <div className="empty-liked">
                    <p>No Favorites yet </p>
                </div>
            )}
        </div >
    )
}