import './Form.css'
import TextField from '../TextField';
import DropDown from '../DropDown';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo, 
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label='Nome' 
                    placeHolder='Digite seu Nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <TextField 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeHolder='Digite seu Cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} 
                />
                <TextField 
                    label='Imagem' 
                    placeHolder='Digite o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropDown 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.nomeDostimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;