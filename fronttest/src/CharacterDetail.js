import React, { useContext, useEffect, useState } from "react"
import {Link as RouterLink, useParams} from "react-router-dom"
import axios from 'axios';
import { Context } from "./FavoriteContext";
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid,  IconButton, Typography, AppBar, Toolbar, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from "@mui/system";
import Navbar from "./Navbar";




function CharacterDetail() {
    const [data, setData]=useState([]);
    const {characterId} = useParams();
    const [context, setContext] = useContext(Context);
    const [isMounted,setIsmounted]=useState(false);
    // const [added,setAdded]=useState(false);

    console.log('el context0es', context)
    // console.log('la variable added es', added)
    let existe= context.some(item=>data.name ===item.name)
    console.log('existe:',existe)

    // console.log('DATA',data.location.name)
    // useEffect(() => {
    //   let existe= context.some(item=>data.name ===item.name)
    //   if(existe){
    //     let datos=context.filter((person)=>person!==data)
    //     // console.log('los datos son', datos)
    //     // console.log(datos)
    //     // setContext(datos)
    //     setContext(datos)
    //   }
    
     
    // }, [existe])
    
    
    function  addFavorite(){

      // let exist=false;
      // setAdded(!added)
      // exist= context.some(item=>data.name ===item.name)

      if(existe){
        let datos=context.filter((person)=>person.id!==data.id)
        // console.log('los datos son', datos)
        // console.log(datos)
        // setContext(datos)
        console.log('el contexto es', context)
        console.log('los datos son', datos)
        setContext(datos)
        console.log('el nuevo contexto desdpues de hacer merge es', context)
      }
     

      else{
        // setContext(data)
        // let datos=context.filter((person)=>person!==data)
        // console.log(`los datos son${datos}`)
        // // setContext(prevstate=>[...prevstate,datos])
        // console.log('la data que hice fetch es',data)
        
        setContext(prevstate=>[...prevstate,data])
        console.log('NO existe y por eso el contexto es ', context)
      }

      // exist= context.some(item=>data.name ===item.name)
      // console.log(exist)
      

    }


    useEffect(() => {
      
      
      
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(({data})=>{setData(data)})
        setIsmounted(true)
        return()=>{
          setIsmounted(false)
        }
      
      }, [])
    

      // if(isMounted){

      //   console.log('SI ESTA MONTADO')
        
      // }
    // const thisProduct = productsData.find(prod => prod.id === characterId)
    // console.log(data)
    return (


      <>
<Navbar subtitle={'Details'}></Navbar>

    <Box mt={10}>


      <Grid container spacing={0} direction="column" alignItems="center" style={{minHeight: '100vh'}} >
       
       <Grid item xs={3}>
            <Card >

                          <CardHeader

                            title={data.name}

                          />
                          <CardMedia
                            component="img"
                            height="194"
                            image={data.image}
                            alt="Paella dish"
                          />
                          <CardContent>
                          <Typography variant="body2" color="text.secondary">
                                Status: {data.status}
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gender: {data.gender}
                                
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {data.species}
                                
                            </Typography>
                          </CardContent>
                          <CardActions disableSpacing>

                            {
                              existe ?  <IconButton aria-label="add to favorites" onClick={addFavorite}>
                              <FavoriteIcon color="error"  />
                            </IconButton>: <IconButton aria-label="add to favorites" onClick={addFavorite}>
                              <FavoriteIcon   />
                            </IconButton> 
                            }
                           


                          </CardActions>

            </Card>
       </Grid>


        </Grid>
        </Box>
      </>

     



      //   <div>
      //       <h1>{data.name}</h1>
      //       {/* <p>Price: ${thisProduct.price}</p>
      //       <p>{thisProduct.description}</p> */}
      //       <button onClick={() => setContext(prevstate=>[...prevstate,data])}>
      //   Change Context Value
      // </button>
      // <Link to={`/favorite`}>favoritos</Link>
      //   </div>
    )
}

export default CharacterDetail