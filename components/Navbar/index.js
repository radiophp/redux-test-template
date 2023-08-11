'use client'
import {useState} from "react";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Link from 'next/link';

import styles from './index.module.css';
import {
        Home as HomeIcon,
        Call as CallIcon,
        Info as InfoIcon,
        Adb as AdbIcon,
        Badge as BadgeIcon,
        Email as EmailIcon,
        Notifications as NotificationsIcon,
        AccountCircle,
        MoreVert as MoreIcon,
        Menu as MenuIcon,
        Article as ArticleIcon,

        } from "@mui/icons-material";


const pages = [
    {title: "Home", component: 'Todos', link: "/"},
    {title: "About", component: 'About', link: "/about"},
    {title: "Contact us", component: 'Contact_us', link: "/contact"},
    {title: "Blog", component: 'blogs', link: "/blogs"},
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="primary">
                        <EmailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={10} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={ {display: {xs: 'none', md: 'flex'}, mr: 1} }/>
                    <Typography variant="h6" noWrap component="a" href="/" sx={ {
                        mr: 2, display: {xs: 'none', md: 'flex'},
                        fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit',
                        textDecoration: 'none',
                    } }>
                        My todos
                    </Typography>

                    <Box sx={ {flexGrow: 1, display: {xs: 'flex', md: 'none'}} }>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
                                    aria-haspopup="true" onClick={ handleOpenNavMenu } color="inherit">
                            <MenuIcon/>
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={ anchorElNav } anchorOrigin={ {
                            vertical: 'bottom', horizontal: 'left',
                        } } keepMounted transformOrigin={ {vertical: 'top', horizontal: 'left',} }
                              open={ Boolean(anchorElNav) } onClose={ handleCloseNavMenu } sx={ {
                            display: {
                                xs: 'block', md: 'none'
                            },
                        } }>
                            { pages.map((page, index) => (
                                <MenuItem key={ index } onClick={ handleCloseNavMenu }>
                                    <Typography textAlign="center">
                                        <Link href={ page.link } >
                                            { page.title }
                                        </Link>

                                    </Typography>
                                </MenuItem>
                            )) }
                        </Menu>
                    </Box>

                    <Box sx={ {flexGrow: 1, display: {xs: 'none', md: 'contents'}, mr: 1} }>
                        <Link href="/" className={ styles.menuitem } >
                          <HomeIcon className={styles.meNavIcon} />
                            Home
                        </Link>
                        <Link href="/blogs" className={ styles.menuItem } >
                            <ArticleIcon className={styles.meNavIcon} />  Blog
                        </Link>
                        <Link href="/contact" className={ styles.menuItem } >
                           <CallIcon className={styles.meNavIcon} /> Contact us
                        </Link>

                        <Link href="/about" className={ styles.menuItem } >
                          <InfoIcon className={styles.meNavIcon} />  About us
                        </Link>

                    </Box>
<Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4}  color="error">
                <CallIcon  />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={12}   color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;