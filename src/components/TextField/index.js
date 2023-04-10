import './TextField.css'

const TextField = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeHolder}/>
        </div>
    )
}

export default TextField;