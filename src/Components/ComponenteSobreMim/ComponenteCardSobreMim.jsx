import * as React from 'react';
import './sobreMim.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={props.img}
        alt="Yuri Alvarenga"
      />
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