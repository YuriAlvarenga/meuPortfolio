import React from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import  * as yup from "yup"
import './inicio.css'


const validationPost = yup.object().shape({
    registroEmail: yup.string().required("Por favor, digite um e-mail válido").max(40,"O email precisa ter apenas até 40 caracteres"),
    registroNome: yup.string().required("Por favor, entre com o seu nome / Empresa").max(40, "O nome precisa ter apenas até 40 caracteres"),
    registroComentario: yup.string().required("Digite algum comentário válido").max(500,"Digite algo com até 500 caracteres"),
})

export default function Inicio(){

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(validationPost)
    })
    const addPost = data => console.log(data) //depois alterar o nome data para valor, melhor

    return(
        <main>
            <div className="Inicio">
                <div className="ConteudoInicio">
                <div className="FalandoSobreMim">
                    <p>Olá, eu me chamo Yuri Alvarenga</p> 
                </div>
                <div className="SuporteCaixaComentario">
                    <form className="caixaFormulario" onSubmit={handleSubmit(addPost)}> 
                        <input className="inputInicio"  type="email" name="registroEmail" {...register("registroEmail")} placeholder="E-mail"/>
                        <p className="mensagensError">{errors.registroEmail?.message}</p>
                        
                        <input className="inputInicio" type="text" name="registroNome" {...register("registroNome")} placeholder="Digite o seu nome / Empresa"/>
                        <p className="mensagensError">{errors.registroNome?.message}</p>
                    
                        <textarea type="text" name="registroComentario" {...register("registroComentario")} placeholder="Deixe-me saber que você esteve aqui..."/>
                        <p className="mensagensError">{errors.registroComentario?.message}</p>

                        <div> <button className="botaoInicio">Enviar</button></div>
                    </form>
                </div>
                </div>
            </div>
        </main>
    )
}