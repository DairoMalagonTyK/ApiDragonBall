import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CharCard.css';

const CharCard=(props)=> {
return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
        <CardMedia
        component="img"
        image={props.img}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffc107' }}>
            {props.nombre}
        </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'black' }}>
            {props.descripcion}
            </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
);
}

CharCard.defaultProps = {	
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
};



export default CharCard;