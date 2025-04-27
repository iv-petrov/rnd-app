

function MyInput(props) {

    return (
    <div>
        <label>
            {props.labelTxt} <input type="number" value={props.input} onChange={props.change} />
        </label>
    </div>
    )
}

export default MyInput