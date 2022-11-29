import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Grid, InputBase, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AppPagination from "./Pagination";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Home = () => {
    
    const [query, setQuery] = useState("")
    const [datos, setDatos]=useState([]);
    const [page,setPage]=useState(1)
    const [numberOfPages, setnumberOfPages]=useState(41)
  
    useEffect(() => {
    
      const fetchData= async()=>{
        const {data:{results},data:{info:{pages:paginas}}}=await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        setnumberOfPages(paginas)
        // console.log('numero de paginas totales', paginas)
        setDatos(results)
      }
      // axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      // .then(({data:{results}})=>{setDatos(results)})
      fetchData().catch(console.error);
      
    
    }, [page])
    if (datos) {
      
        return(
          <>

    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            Fitbody
            </Typography>
          
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => setQuery(event.target.value)}
              >
          

             </StyledInputBase>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

            <Grid container spacing={4} justify="center" sx={{pl:10, pt:5,  pr:10}}>
            
                        {/* {datos.forEach(personaje=> {
                          for (let key in personaje){
                            // <li>personaje[key]</li>
                            console.log(`${key}: ${personaje[key]}`)
                          }
                        })} */}
  
                        {
                          datos.filter(character => {
                            if(query === ''){
                              return character;
                            }
                            else if (character.name.toLowerCase().includes(query.toLowerCase())) {
                              return character;
                            }
                          }).map((personaje)=>(
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
  
                        {/* {datos.map((personaje)=>(
                          <li key={personaje.id}>{personaje.name}</li>
                        ))} */}
  
  
  
              
            </Grid>
               
               <AppPagination setPage={setPage} pageNumber={numberOfPages}/>
          </>
         
        )
     
      } else {
        return(
          <p>NO users</p>
        )
      }
        
};

export default Home;