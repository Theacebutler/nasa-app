import '../css/Main.css'

export default function Main(props) {

const { handelToggleModel, data} = props

    return (
        <div className="image-container"
        onClick={handelToggleModel}>
            <img src={data.url} alt={data.title} className='image-of-the-day'/>
        </div>
    )
}