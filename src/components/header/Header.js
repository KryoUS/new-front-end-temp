import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import Class from '@material-ui/icons/Class';
import DateRange from '@material-ui/icons/DateRange';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Assessment from '@material-ui/icons/Assessment';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as DiscordIcon } from '../icons/Discord-Logo-White.svg';
import Discord from './Discord';
import RealmStatus from './RealmStatus';
import TokenPrice from './TokenPrice';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            drawerOpen: false,
            discordOpen: false
        }
    }

    handleMenu = () => {
        return null
    }

    drawerToggle = () => {
        this.setState(prevState => ({
            drawerOpen: !prevState.drawerOpen
        }));
    }

    discordToggle =() => {
        this.setState(prevState => ({
            discordOpen: !prevState.discordOpen
        }));
    }

    render(){
        return(
            <Appbar position="fixed" color="transparent" style={{color: "#fff", boxShadow: "none"}}>
                <Toolbar>
                    <Hidden mdUp>
                        {/* MOBILE/TABLET ONLY */}
                        <IconButton onClick={() => this.drawerToggle()} >
                            <MenuIcon style={{fontSize: 48}} />
                        </IconButton>
                        <Container style={{flexGrow: 1}}>
                            <Typography variant="h4" align="center">Complexity</Typography>
                            {/* <img style={{height: "46px"}} src="https://res.cloudinary.com/complexityguild/image/upload/v1535585345/wow/logos/logov3.png" alt="Complexity Logo"/> */}
                        </Container>
                    </Hidden>
                    <Hidden smDown>
                        {/* DESKTOP ONLY */}
                        <Container style={{flexGrow: 1}}>
                            <Typography variant="h4" align="left">Complexity</Typography>
                            {/* <img style={{height: "46px"}} src="https://res.cloudinary.com/complexityguild/image/upload/v1535585345/wow/logos/logov3.png" alt="Complexity Logo"/> */}
                        </Container>
                        <Grid container direction="column">
                            <Grid item xs>
                                <Grid container justifyContent="flex-end">    
                                    <ButtonGroup variant="text">
                                        <Button size="large">Home</Button>
                                        <Button size="large">About</Button>
                                        <Button size="large" onClick={() => this.discordToggle()}>Discord</Button>
                                        <Button size="large">Simulations</Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                                    <Grid item>
                                        <RealmStatus />
                                    </Grid>
                                    <Grid item>
                                        <Button 
                                        variant="outlined" 
                                        size="small"
                                        startIcon={<Info />}>
                                            Class Info
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button 
                                        variant="outlined" 
                                        size="small"
                                        startIcon={<DateRange />}>
                                            Mythic+ Affixes
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <TokenPrice />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <IconButton
                        onClick={this.handleMenu}
                        edge={'end'}
                        disabled
                    >
                        <AccountCircle style={{fontSize: 48}} />
                    </IconButton>
                </Toolbar>
                <Drawer anchor="left" open={this.state.drawerOpen} onClose={this.drawerToggle} >
                    <List>
                        {/* MAKE PROGRAMATIC */}
                        <ListItem>
                            <RealmStatus />
                        </ListItem>
                        <Divider />
                        <ListItem button key="home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button key="about">
                            <ListItemIcon>
                                <Info />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button key="discord" onClick={() => this.discordToggle()}>
                            <ListItemIcon>
                                <DiscordIcon style={{width: "24px", height: "24px"}} />
                            </ListItemIcon>
                            <ListItemText primary="Discord" />
                        </ListItem>
                        <ListItem button key="simulations">
                            <ListItemIcon>
                                <Assessment />
                            </ListItemIcon>
                            <ListItemText primary="Simulations" />
                        </ListItem>
                        <Divider />
                        <ListItem button key="classInfo">
                            <ListItemIcon>
                                <Class />
                            </ListItemIcon>
                            <ListItemText primary="Class Info" />
                        </ListItem>
                        <ListItem button key="mythicAffix">
                            <ListItemIcon>
                                <DateRange />
                            </ListItemIcon>
                            <ListItemText primary="Mythic+ Affixes" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <TokenPrice />
                        </ListItem>
                    </List>
                </Drawer>
                <Discord discordOpen={this.state.discordOpen} discordToggle={this.discordToggle}/>
            </Appbar>
        )
    }
}

export default Header;