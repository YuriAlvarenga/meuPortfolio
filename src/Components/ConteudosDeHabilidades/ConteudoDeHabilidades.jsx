
import * as React from 'react';
import './mostraConteudo.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CardHabilidade(props) {
    return (
      <div className='conteudoHabilidade'>
        <Card sx={{ width: 600, height:500}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Olá, eu sou Yuri Alvarenga. Tenho 27 anos de idade e sou desenvolvedor Front-end
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Leia Mais</Button>
        </CardActions>
        </Card>
      </div>
     
  
    );
  }