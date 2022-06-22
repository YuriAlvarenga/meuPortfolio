import React, { useEffect, useState } from "react"
import './comentario.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import  * as yup from "yup"

import ComentariosRecebidos from './ComentariosRecebidos/comentariosRecebidos'
import axios from "axios"

//const baseURL =  ///qual endereço coloco?


const validationPost = yup.object().shape({
    registroEmail: yup.string().uppercase().required("Por favor, digite um e-mail válido").max(40,"O email precisa ter apenas até 40 caracteres"),
    registroNome: yup.string().uppercase().required("Por favor, entre com o seu nome / Empresa").max(40, "O nome precisa ter apenas até 40 caracteres"),
    registroComentario: yup.string().required("Digite algum comentário válido").max(500,"Digite algo com até 500 caracteres"),
})


export default function Comentario(){
 //
    const [listaComentarios, setListaComentarios] = useState([])
    
     useEffect(()=>{
        axios.get("http://localhost:3333/comments").then((response)=>{
            //console.log(response.data)
            setListaComentarios(response.data)
            console.log(response.data)
     }).catch((e)=>{
         console.log("Este foi o erro", e)
     })
    },[])

    const { register, handleSubmit, formState: { errors} } = useForm({
    resolver: yupResolver(validationPost)
    })
    //const addPost = data => console.log(data) //depois alterar o nome data para valor, melhor
    const addPost = data => axios.post("http://localhost:3333/comments", data).then(()=>{
        console.log("Deu certinho gafanhoto!")
    }).catch(()=>{
        console.log("Não foi dessa vez kkkkk ")
    })

    return(
        <div className="ComponenteComentario">
            <h2 className="TituloComentario">COMENTÁRIOS</h2>
          
            <form className="CaixaFormulario" onSubmit={handleSubmit(addPost)}>
                <div className="Formulario" > 
                    <input className="InputForm" type="text" name="registroEmail" {...register("registroEmail")} placeholder="E-mail" autoComplete="off"/>
                    <p className="mensagensError">{errors.registroEmail?.message}</p>
                            
                    <input className="InputForm"  type="text" name="registroNome" {...register("registroNome")} placeholder="Digite o seu nome / Empresa" autoComplete="off"/>
                    <p className="mensagensError">{errors.registroNome?.message}</p>

                    <textarea className="InputArea" type="text" name="registroComentario" {...register("registroComentario")} placeholder="Deixe-me saber que você esteve aqui..."/>
                    <p className="mensagensError">{errors.registroComentario?.message}</p>   
                </div>
                <div className="CaixaBotao"> <button className="botaoInicio">Enviar</button></div>
            </form>
            <div className="ContainerComentariosRecebidos">
                <h2>COMENTÁRIOS RECEBIDOS</h2>
                   {listaComentarios.length > 0 && listaComentarios.map((comentarios)=>(
                        <ComentariosRecebidos 
                            // id={comentarios.id}
                            empresa={comentarios.registroNome}
                            comentario={comentarios.registroComentario}
                        />  
                    ))}
            </div>
           
        </div>
    )
}