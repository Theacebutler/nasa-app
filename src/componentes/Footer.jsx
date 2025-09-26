import '../css/Footer.css'

export default function Footer(props) {

    const { handelToggleModel, data } = props
    
    return (
        <div className="footer">
            <div className="gradient"></div>
            <div>
                <h2>
                    {data.title}
                </h2>
                <h1>{data.date}</h1>
            </div>
                <button type="button"
                onClick={handelToggleModel}>
                    <i class="fa-solid fa-circle-info"></i>
                </button>
        </div>
    )
}