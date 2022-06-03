
import * as React from 'react'
import './mostraConteudo.css'

import Card from '@mui/material/Card'
import CardHTML from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'



export default function CardHabilidade(props) {
    return (
      <div className='conteudoHabilidade'>
        <div>
          <Card sx={{ width: 300, height:400, backgroundColor: "#000", margin: 5}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.titulo}
            </Typography>
            <Typography variant="body2" color="#eee">
            
            </Typography>
          </CardContent>
          </Card>
        </div>
      </div>
     
  
    );
  }