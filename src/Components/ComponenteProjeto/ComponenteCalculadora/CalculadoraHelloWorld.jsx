import React from "react"
import Typewriter from "typewriter-effect"

import './calculadoraHelloWorld.css'

export default function CalculadoraHelloWorld (){
    return(
        <div className="ContainerCalculadoraHelloWorld">
            <div className="Calculadora">
                <div className="CalculadoraTela">
                    <Typewriter
                        onInit={(typewriter)=> {
                            typewriter
                            .typeString("Hello World") 
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("2 + 2 = 4")
                            .start();
                            }}
                    />
                </div>
                <div className="ContainerBotoesCalculadoraHelloWorld">
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                </div>
                <div className="ContainerBotoesCalculadoraHelloWorld">
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                </div>
                <div className="ContainerBotoesCalculadoraHelloWorld">
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                    <span className="BotoesCalculadoraHelloWorld"></span>
                </div>
            </div>
        </div>
    )
}