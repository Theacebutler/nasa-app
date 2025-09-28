import Like from './Like'
import Random from './Random'
import '../css/Footer.css'

export default function Footer(props) {

    const { handelToggleModel, data, setData } = props

    return (
        <div className="footer">
            <div className="gradient"></div>
            <div>
                <h2>
                    {data.title}
                </h2>
                <h1>{data.date}</h1>
            </div>
            <div className="btns">
                <Like />
                <Random setData={setData} />
                <button type="button"
                    onClick={handelToggleModel}>
                    <i class="fa-solid fa-circle-info"></i>
                </button>
            </div>

        </div>
    )
}