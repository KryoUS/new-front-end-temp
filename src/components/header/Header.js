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
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as DiscordIcon } from '../icons/Discord-Logo-White.svg';
import { ReactComponent as ComplexityLogo } from '../icons/complexityMoose.svg';
import Discord from './Discord';
import RealmStatus from './RealmStatus';
import TokenPrice from './TokenPrice';
import Quotes from './Quotes';

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
            <Appbar position="sticky">
                <Toolbar variant={"dense"} style={{backgroundColor: "#121212"}}>
                    <Hidden lgUp>   {/* MOBILE/TABLET ONLY */}
                        <IconButton onClick={() => this.drawerToggle()} >
                            <MenuIcon style={{fontSize: 48}} />
                        </IconButton>
                        <Container style={{display: "flex", justifyContent: "center", flexGrow: 1}}>
                            <ComplexityLogo style={{height: "41px", width: "41px"}} />
                            <Typography variant="h4" align="center">Complexity</Typography>
                            {/* <img style={{height: "46px"}} src="https://res.cloudinary.com/complexityguild/image/upload/v1535585345/wow/logos/logov3.png" alt="Complexity Logo"/> */}
                        </Container>
                        <IconButton
                            onClick={this.handleMenu}
                            edge={'end'}
                            disabled
                        >
                            <AccountCircle style={{fontSize: 46}} />
                        </IconButton>
                    </Hidden>
                    <Hidden mdDown> {/* DESKTOP ONLY */}
                        <Grid container>
                            <Grid item xs={7} style={{display: "flex", justifyContent: "flex-start"}}>
                                <Quotes />
                            </Grid>
                            <Grid container spacing={2} item xs={5} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Grid item xs={3} container spacing={2} style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                                    <RealmStatus />
                                </Grid>
                                <Grid item>
                                    <Button 
                                    variant="text" 
                                    size="medium"
                                    startIcon={<Info />}>
                                        Class Info
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button 
                                    variant="text" 
                                    size="medium"
                                    startIcon={<DateRange />}>
                                        Mythic+ Affixes
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <TokenPrice />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Toolbar>
                <Hidden mdDown> {/* DESKTOP ONLY */}
                    <Toolbar>
                        <Grid container align-items={"center"}>
                            <Grid container item xs={3} zeroMinWidth style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Grid item>
                                    <ComplexityLogo style={{height: "80px", width: "80px"}} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">Complexity</Typography>
                                    {/* <img style={{height: "46px"}} src="https://res.cloudinary.com/complexityguild/image/upload/v1535585345/wow/logos/logov3.png" alt="Complexity Logo"/> */}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} item xs={9} zeroMinWidth style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                                <Grid item>
                                    <Button size="large">
                                        <Typography variant="h6">News</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="large" disabled>
                                        <Typography variant="h6">About</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="large" disabled>
                                        <Typography variant="h6">Raiders</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="large" disabled>
                                        <Typography variant="h6">Members</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="large" disabled>
                                        <Typography variant="h6">Simulations</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="large" disabled>
                                        <Typography variant="h6">Twitch</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="large" disabled>
                                        <Typography variant="h6">Youtube</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="large" onClick={() => this.discordToggle()}>
                                        <Typography variant="h6">Discord</Typography>
                                    </Button>
                                </Grid>
                                <Grid item style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                    <IconButton
                                        onClick={this.handleMenu}
                                        edge={'end'}
                                        disabled
                                    >
                                        <AccountCircle style={{fontSize: 46}} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    {/* <Toolbar variant={"dense"} style={{backgroundColor: "#121212"}}>
                    </Toolbar> */}
                </Hidden>
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