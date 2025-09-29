import Like from './Like'
import Random from './Random'
import Info from './Info'
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
                <Like data={data} />
                <Random setData={setData} />
                <Info handelToggleModel={handelToggleModel} />
            </div>

        </div>
    )
}