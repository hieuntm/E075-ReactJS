const Input = ({label, ...inputInfo}) => {

    return(<>
        <label>
            <input {...inputInfo}/>
        </label>
    </>)
}

export default Input;