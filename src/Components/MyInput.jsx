

function MyInput(props) {

    return (
    <div>
        <label>{props.labelTxt}</label>
        <p>
        <input type="number" value={props.input} onChange={props.change} />
        </p>
    </div>
    )
}

export default MyInput