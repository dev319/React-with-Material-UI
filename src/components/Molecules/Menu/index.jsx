import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration:none;
  &:hover, &:focus, &:active{
    color: inherit;
    text-decoration:none;
  }
`

const NavigationLink = React.forwardRef((props, ref) => {
  return <StyledLink {...props} ref={ref} />
})


const useStyles = makeStyles({
  list: {
    width: 250,
  }, 
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      <ListItem button onClick={()=>{history.push("/")}}>
         <ListItemIcon><MenuIcon /></ListItemIcon>
          <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={()=>{history.push("/contact")}}>
         <ListItemIcon><MenuIcon /></ListItemIcon>
          <ListItemText primary="Contact" />
      </ListItem>
      </List>
      <Divider />
      
    </div>
  );

  const history = useHistory();
  return (
    <>
    <AppBar position="static">
          <Toolbar>

            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>

            <Typography component="span">
              <NavigationLink  href="/">Home</NavigationLink>
            </Typography>
           
            <Box ml={2}>
            <Typography component="span">
            <NavigationLink href="/contact">Contact</NavigationLink>
            </Typography>  
            </Box>  

          </Toolbar>
        </AppBar>  
      
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
     
    </>
  );
}
