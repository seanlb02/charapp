import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));



export default function MainNavigation({}) {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);
  const [isVip, setIsVip] = useState(true)

  useEffect(() => {
  //  put the check if VIP service fetch here and set isVip state to the value retured in json
  }, [])



  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar  style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar>
          
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none"
              }
            }}
          >
            <MenuIcon style={{fill: "black"}}/>
          </IconButton>
         {/* conditionally render the home button to access logged in VIP profile */}
          {isVip == true ? 
              <div className={styles.homelogo}>          
                <Image src="/home.png" width={45} height={45}></Image>
              </div>
              :
              <div></div>
          }

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="left"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#dbc8ff"
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <div>
                  <ListItemButton>
                    <ListItemIcon>
                      <ImageIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </div>

                <div>
                  <ListItemButton>
                    <ListItemIcon>
                      <DescriptionIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </div>
                
              </Box>

             
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)"
                }}
              >
                
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const styles = {
  homelogo: 'ml-auto',
}