import React from "react"
import Writer from "typewriter-effect"

import './capaToDoList.css'

export default function CapaToDoList(){
    return(
        <div className="ContainerCapaToDoList">
            <div className="ToDoListCapa">
                <div className="ToDoListTitulo">
                    <span>TO-DO LIST</span>
                </div>
                <div className="ContainerToDoListCorpo">
                    <span>COMPRAR FRUTAS</span>
                </div>
                <div className="ContainerToDoListCorpo">
                    <span>COMPRAR CAFÉ</span>
                </div>
                <div className="ContainerToDoListCorpo">
                    <span>PROGRAMAR</span>
                </div>
                <div className="ContainerToDoListCorpo">
                    <Writer
                        onInit={(writer)=> {
                            writer
                            .pauseFor(1000)
                            .typeString("ESTUDAR") 
                            .start();
                            }}
                    />
                </div>
            </div>
        </div>
    )
}