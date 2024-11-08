import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CharCard.css';

const CharCard = (props) => {
  return (
    <Card sx={{ 
      width: '100%', 
      maxWidth: 360, 
      borderRadius: 2, 
      boxShadow: 3, 
      m: 2 
    }}>
      <CardActionArea>
        <div className="image-background">
          <div className="image-container">
            <CardMedia
              component="img"
              image={props.img}
              alt={props.nombre}
              className="character-image"
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
        <CardContent sx={{ textAlign: 'center', backgroundColor: '#f5b44e' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            {props.especie}
          </Typography>
          <Typography variant="body2" sx={{ color: 'black', fontWeight: 'bold', marginTop: 2 }}>
            Base KI: {props.baseKi} 
          </Typography>
          <Typography variant="body2" sx={{ color: 'black', fontWeight: 'bold', marginTop: 2 }}>
            Total KI: {props.totalKi}
          </Typography>
          <Typography variant="body2" sx={{ color: 'black', fontWeight: 'bold', marginTop: 2 }}>
            Affiliation: {props.affiliation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CharCard.defaultProps = {	
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
  nombre: "_____", 
  especie: "____",
  genero: "______", 
  baseKi: "______", 
  totalKi: "______", 
  Afiliacion: "______" 
};

export default CharCard;
