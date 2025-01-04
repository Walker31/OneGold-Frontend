import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";

const navItems = ["Home", "Shop", "About"];

function Navbar() {
  return (
    <Box className="navbar-container">
      <CssBaseline />
      <AppBar component="nav" className="appbar">
        <Toolbar>
          {/* Navigation Items for Desktop */}
          <Box className="nav-items">
            {navItems.map((item) => (
              <Button key={item} className="nav-button">
                {item}
              </Button>
            ))}
          </Box>

          {/* Logo in the Center */}
          <Box className="logo-container">
            <img
              src="/Assets/logo.png"
              alt="Brand Logo"
              height={100}
              width={100}
              className="brand-logo"
            />
          </Box>

          <Box className="icons">
            <SearchIcon className="search-icon" />
            <PermIdentityIcon className="people-icon" />
          </Box>


        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box component="main" className="main-content">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
