import React, { useState } from "react"
import "./cardProjeto.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CardProjeto(props){
    const [divTeste, setDivTest] = useState(true)
    const abreDivTeste = () =>{
        setDivTest(!divTeste)
    }
    return(
        <div>
             <Card sx={{ maxWidth: 345 }}>
                <div className={divTeste === true ? "DivImagemAberta" :"HiddenDiv"}>
                {props.componenteCapa}
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.descricao}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button  size="small" onClick={abreDivTeste}>Testar</Button>
                </CardActions>
                <div className={divTeste === true ? "HiddenDiv" : "DivAberta"}>{props.componente}</div>
            </Card>
        </div>
    )
}