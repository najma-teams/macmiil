import  React, { useContext } from "react";
// import { ColorModeContext } from "../../Theme";
import { Box, Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, Facebook, Instagram, LightModeOutlined, Twitter } from "@mui/icons-material";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Navbar from './Navbar'
import Header2 from "./Header2";


const options = [
  'AR',
  'EN',
 
];

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //  const colorMode = useContext(ColorModeContext);
  // const theme = useTheme();
  return (
    <div>





       <Box sx={{
      bgcolor:"#2B3445",
      py:"4px",
      borderBottomRightRadius:4,
      borderBottomLeftRadius:4
    }}>

 <Container>
 <Stack direction={"row"} alignItems={"center"}>
      <Typography sx={{
        mr:2,
        p:"3px 10px",
        bgcolor:"#D23F57",
        borderRadius:"12px",
        fontSize:"10px",
        fontWeight:"bold",
        color:"#fff"
      }}>
        Hot
      </Typography>

      <Typography sx={{
        fontSize:"12px",
        fontWeight:"300",
        color:"#fff"
      }}
      variant="body2"
      >
        Free Express Shipping 
      </Typography>

      <Box flexGrow={1}/>
     
     {/* <div>
     {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined sx={{fontSize:"16px", color:"#fff"}}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined sx={{fontSize:"16px"}} />
        </IconButton>
      )}
     </div> */}

  
      <List
        component="nav"
        aria-label="Device settings"
        sx={{p:0,m:0}}
        
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{ "&:hover":{cursor:"pointer"},px:1}}
        >
          <ListItemText
            sx={{".MuiTypography-root": {fontSize:"11px", color:"#fff"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"16px", color:"#fff"}}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{ fontSize:"11px", p:"3px 10px", minHeight:"10px"}}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
   

     <Twitter 
     sx={{
      fontSize:"16px",
      color:"#fff"
     }}
     />

     <Facebook
     sx={{
      fontSize:"16px",
      color:"#fff",
      mx:1
     }}
     />

     <Instagram
     sx={{
      fontSize:"16px",
      color:"#fff"
     }}
     />


      </Stack>
 </Container>
    </Box>


        <Navbar/>

        <Header2/>

    </div>
  )
}

export default Header