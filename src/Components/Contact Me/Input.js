





function Input (props){
    const {type, placeholder, name, value,  onChange, erorrMsg} = props;


    function handleChange(){
        onChange();
    }

    return(
        <>
            <input type={type}
            placeholder = {placeholder}
            name = {name}
            value = {value}
            onChange = {handleChange} />
            <span>{erorrMsg}</span>
        </>
    )
}

export default Input;