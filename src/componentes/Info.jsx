

export default function Info(props) {
    const {handelToggleModel} = props
    return (
        <button type="button"
            onClick={handelToggleModel}>
            <i class="fa-solid fa-circle-info"></i>
        </button>
        
    )
}