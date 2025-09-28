import '../css/LikedImage.css'

export default function LikedImage(props) {

    const { image } = props
    
    return (
        <div className="image">
            <img src={image?.url} alt={image?.title} srcset="" />
        </div>
    )
}