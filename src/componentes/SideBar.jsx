import '../css/SideBar.css'

export default function SideBar(props) {
    const { handelToggleModel, data} = props

    return (
        <div className="side-bar">
            <div className="bg-overlay"></div>

            <div className="side-bar-content" onClick={handelToggleModel}>
                <h2>{data.title}</h2>
                <a href={url} className='wikiUrl'>
                    <i className='fa-brands fa-wikipedia-w' ></i>Check out the Wikipdia page</a>
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