import '../css/SideBar.css'

export default function SideBar(props) {

    const { handelToggleModel, data } = props

    return (
        <div className="side-bar">
            <div className="bg-overlay"></div>

            <div className="side-bar-content" onClick={handelToggleModel}>
                <h2>{data.title}</h2>
                <p>{data.explanation}</p>
                <div className='btn'
                    onClick={handelToggleModel}>
                    <button type="button">
                        <i className='fa-solid fa-arrow-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}