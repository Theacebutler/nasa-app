import '../css/LikedImage.css'
import Like from './Like'
export default function LikedImage(props) {

    const { image } = props
    return (
        <div className="image">
            <img src={image?.url} alt={image?.title} srcset="" />
            <span style={{
                position:'absolute',
                top: 0,
                left: 0,
                fontSize: '2rem',
            }}>
            <Like image={image}/>
            </span>
        </div>
    )
}