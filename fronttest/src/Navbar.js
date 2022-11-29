import React from "react";
import axios from 'axios';

import {  Link as RouterLink} from "react-router-dom";
import { AppBar,Button,InputBase,Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from '@mui/material/styles';



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


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));





const Navbar = ({searchInput,subtitle}) => {
    

      
        return(
          


             
      <AppBar position="fixed" color="primary">
        <Toolbar>
                  <Typography variant="h6">
                        {subtitle}
                    </Typography>

                    <Box  sx={{display: "flex",alignItems:"center" , justifyContent: "center", width:'100%'}} component='div'>

                        <Box sx={{display:"flex"}}>

                          <Button component={RouterLink} to="/" sx={{marginRight:"20px", color:"white"}}>
                    Home
                  </Button>

                  <Button component={RouterLink} to="/favorite" sx={{marginRight:"20px", color:"white"}}>
                    Favorites
                  </Button>
                            

                        </Box>

                        

                    </Box>

        
        </Toolbar>

      </AppBar>
    

        )
     
      
        
};

export default Navbar;