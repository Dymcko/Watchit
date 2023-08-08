import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const blockStyle = {
    position: "absolute",
    color: "#fff",
    left:"15px",
    bottom: "55px",
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: "20px",
    background: "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
}

const divs = {
    marginTop: "20px",
    marginBotom: "20px",
}
export default function FilmCard({id, names, time, image,  }) {

    const handleClick = (id) => {
      console.log(`${id}`)

    }
  return (
    <Card sx={{ width: "395px", height: "222px", margin: "20px",   }}>
      <CardActionArea >
        <CardMedia 
          component="img"
          height="222"
          image={image}
          alt={names}
          
        />
       <div style={blockStyle}>
         <div style={divs}>{names}</div>
         <div style={divs}>{time}</div> 
         <div style={divs}>
         <Button onClick={() => handleClick(id)}
          sx={{ 
            border: "1px solid #E50914", 
            background: "#E50914", 
            width: "100px", 
            height: "30px", 
            color: "#fff"
            }}>
          Showmore
         </Button>
        </div>
      
       </div>
           
      
      </CardActionArea>

    </Card>
  );
}