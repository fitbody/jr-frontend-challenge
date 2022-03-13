import React, { useContext, useEffect, useState } from "react";
import { Context } from "./FavoriteContext";
import axios from 'axios';
import { AppBar, Card, CardContent, CardMedia, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Navbar from "./Navbar";

const Favorite = () => {
  
    const [context, setContext] = useContext(Context);
   
    console.log(context)
  

    return (

<> 
   <Navbar subtitle={'Favorites'}></Navbar>


<Box mt={10}>
      <Grid container spacing={4} justify="center" sx={{pl:10, pt:5,  pr:10}}>
            
      {/* {datos.forEach(personaje=> {
        for (let key in personaje){
          // <li>personaje[key]</li>
          console.log(`${key}: ${personaje[key]}`)
        }
      })} */}

      {
         context.map((personaje)=>(
          // <li key={personaje.id}>{personaje.name}</li>

             <Grid item xs={12} sm={6} md={4} key={personaje.id}>
                    <Link to={`/character/${personaje.id}`}>
                      
                    <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            height="200"
                            image={personaje.image}
                            alt={personaje.name}
                          />
                          <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {personaje.name}
                                </Typography>
                              
                          </CardContent>

                      </Card>
                      
                      
                    </Link>
                  </Grid>
                  
                ))
              }



        </Grid>
        </Box>
</>







     
    );
   


  }
  export default Favorite;