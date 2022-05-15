import React from "react"
import { useState  } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import  * as yup from "yup"

import './inicio.css'
import ImagemIFC from '../../Imagens/IFC.jpeg'
import ImgagemPerfilInicio from '../../Imagens/fotoPerfilInicio.jpeg'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdArrowDropup } from 'react-icons/io'



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

    let tempo = new Date()
    let dia = String(tempo.getDate()).padStart(2,'0')
    let mes = String(tempo.getMonth() + 1).padStart(2, '0')
    let ano = tempo.getFullYear()
    let dataFormatada = `${dia} / ${mes}/ ${ano}`   
    
    const [abrirLerMais, setFecharLerMais] = useState(true)
    const mostrandoConteudo =()=>{
            setFecharLerMais(!abrirLerMais)
            console.log("leu conteudo")
            }

    return(
        <main>
            <div className="Inicio">
                <div className="ConteudoInicio">
                <div className="TituloSobreMim">
                    <h1>SEJA BEM-VINDO AO MEU PORTFÓLIO !</h1>
                </div>
                <div className="SuporteData">
                    <div className="DataInicio">{dataFormatada} </div> 
                </div>
                <div className="ConteudoSobreMim">
                <h3 className="Titulo">Uma breve história sobre Yuri Alvarenga . . .</h3>
                    <div className="SuporteDeTextoComImagem">
                        <p className="TextoApresentacaoAoLadoImagem">
                            Olá, meu nome é Yuri Alvarenga, tenho 27 anos e atualmente moro em Itapema, Santa Catarina. Mas sou natural
                            de São Luís - MA. Aqui eu vou contar um pouco sobre minha trajetória e de como eu me apaixonei pela programação. Além disso, também 
                            vou mencionar sobre o que espera vocês nas outras abas desse portfólio de uma maneira bem superficial
                            para vocês continuarem com toda curiosidade no meu perfil.
                        </p>
                        <img className="ImagemComTextoInicio" src={ImgagemPerfilInicio} alt="Foto de Yuri em perfil de boné"/>
                    </div>
                   <div className="LerMais" onClick={mostrandoConteudo} > 
                        <span></span>
                        Ler Mais
                        <div className="SetaLerMais">{abrirLerMais ? <IoMdArrowDropdown/> : <IoMdArrowDropup/> }</div>
                        
                    </div>
                   <p className={` ${abrirLerMais ? "paragrafoEscondido" : "TextoApresentacao"}`}>
                        Acho relevante começar pelos motivos que me aproximaram da programação. Então, tudo começou durante o início 
                        da minha vida adulta quando eu tive vários contatos com algoritmos e lógica de programação por influência do meu irmão mais velho em ser da área,
                         mas eu achava que estava destinado a outros aprendizados, na época fazia curso de Engenharia Elétrica. Lá eu tive também
                        a oportunidade de uma introdução com a linguam em C. Depois, por curiosidade, tentei aprender Python e Java também. Só que nunca
                        me  aprofundei nessas tecnologias por conta da ocupação com o outro curso e do trabalho também. No entanto, acabei não me identificando com o curso
                        de Engenharia Elétrica e tranquei a faculdade. Foi só alguns anos depois, durante a pandemia, que mergulhei de vez com o 
                        aprendizado nas linguagens de programação.
                    </p>
                    <p className={` ${abrirLerMais ? "paragrafoEscondido" : "TextoApresentacao"}`}>
                        No primeiro momento eu comecei a estudar Python por uma plataforma de estudos online e adorei. Só que
                        ao decorrer de um projeto, o professor mencionou sobre a linguagem Javascript como requisito para aquele projeto
                        em específico. Então, por conta disso, eu comecei a pesquisar sobre essa linguagem e consequentemente a estudar ela. Concomitante a isso,
                        ainda durante a pandemia, recebi o resultado do Instituto Federal Catarinense de aprovação no curso de Sistema de Informação.
                        Então, dessa vez, estava tudo se encaixando!
                    </p>
                    <div className={` ${abrirLerMais ? "paragrafoEscondido" : "SuporteImagemIFC"}`} >
                        <img className="ImagemIFC" src={ImagemIFC} alt="Foto aprovação em IFC"/>
                    </div>
                    <div>
                        <p className={` ${abrirLerMais ? "paragrafoEscondido" : "TextoApresentacao"}`}>
                            Na faculdade, os professores resolveram utilizar Python por diversos motivos e em várias disciplinas.
                            Por conta disso, o meu conhecimento na linguagem foi reforçado mais ainda com as diversas listas e conhecimentos distribuidos
                            durante as aulas. Além disso, eu continuei os meus estudos na linguagem Javascript como escolha pessoal.
                            Hoje eu gostaria de trabalhar na área de tecnologia e com certeza anseio por fazer carreira na área de desenvolvimento.
                            Por esses motivos, eu desenvolvi o meu portfólio e aqui mostro diversos processos que aprendi durante esse período e 
                            principalmente construindo esse site. Nas outras abas deste site, você irá encontrar muita interatividade e 
                            habilidades que desenvolvi tanto no Front-End como em Back-End. 
                        </p>
                    </div>
                </div>
                <div className="Comentarios">
                    <div >Comentários</div>
                </div>
                <div className="SuporteTotalizador">
                    <div className="Totalizador">0 Comentários</div>
                    <div className="Totalizador">0 Curtidas</div>
                    <div className="Totalizador">0 Favoritos</div>
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