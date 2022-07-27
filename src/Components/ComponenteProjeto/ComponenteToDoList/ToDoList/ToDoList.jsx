import React, { useState, useEffect } from "react"

import axios from "axios"

import { useForm } from 'react-hook-form'
import  * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'


import './todolist.css'
import { MdOutlineAddCircle } from 'react-icons/md'


const validationPostTask = yup.object().shape({
    registroTask: yup.string().required
    ("Por favor, digite uma tarefa válida").max(35,"O email precisa ter apenas até 35 caracteres"),
})



export default function ToDoList (){
    const [listaTarefas, setListaTarefas] = useState([])
    const [post, setPost] = useState([])

      
     useEffect(()=>{
        axios.get("http://localhost:3333/todolist").then((response)=>{
            
            setListaTarefas(response.data)
     }).catch((e)=>{
         console.log("Este foi o erro", e)
     })
    },[])


    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver : yupResolver(validationPostTask)
        })

    const addTask = data => axios.post("http://localhost:3333/todolist", data).then(()=>{
        setPost()
        window.alert("Tarefa inserida com sucesso")
        window.location.reload()
     }).catch((e)=>{
        if(!post) return console.log("O seguinte erro ocorreu: ", e)
     })


    return(
        <div className="ContainerToDoList">
            <form className="ContainerCadastrarTarefa" onSubmit={handleSubmit(addTask)}>
                <input className="InputTarefa" type="text" name="registroTask" {...register("registroTask")} autoComplete="off" placeholder="Digite uma tarefa aqui"/>
                <button className="BotaoCadastrar"><MdOutlineAddCircle size={20}/></button>
            </form>
            <span>{errors.registroTask?.message}</span>
            <div className = "ContainerTasks">
                    {listaTarefas.length > 0 && listaTarefas.map((tarefas)=>(
                        <div className="Tasks">
                            <input type="checkbox"/>
                            <div>{tarefas.registroTask}</div>
                        </div>                  
                    ))}
            </div>
        </div>
    )
}