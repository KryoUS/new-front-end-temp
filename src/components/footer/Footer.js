import React from 'react';
import MythicAffixes from '../header/MythicPlus/MythicAffixes';
import { Grid, Typography, Button, Container, Divider, Box, Paper } from '@material-ui/core';

export default class News extends React.Component{
    constructor() {
        super();
    }

    render(){
        return(
            <Paper style={{paddingBottom: 12}}>
                <Divider />
                <Container>
                    <Box sx={{padding: 12}}>
                        <Grid container>
                            <Grid item xs={3} container justifyContent='center' alignItems='center'>
                                <Grid item>
                                    <MythicAffixes iconHW={32} iconSize={'medium'} />
                                </Grid>
                            </Grid>
                            <Grid item xs={3} container direction="column">
                                <Grid item>
                                    <Typography variant="h6">NAVIGATION</Typography>
                                </Grid>
                                <Grid item>
                                    <Button size="small">
                                        <Typography variant="body1">News</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="small" disabled>
                                        <Typography variant="body1">About</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="small" disabled>
                                        <Typography variant="body1">Raiders</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="small" disabled>
                                        <Typography variant="body1">Members</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="small" disabled>
                                        <Typography variant="body1">Simulations</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="small" disabled>
                                        <Typography variant="body1">Twitch</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="small" disabled>
                                        <Typography variant="body1">Youtube</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button size="small" onClick={() => this.discordToggle()}>
                                        <Typography variant="body1">Discord</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Divider style={{marginTop: 12, marginBottom: 12}} />
                <Container>
                    <Typography variant="caption" color="textSecondary">World of Warcraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries. All other trademarks are the property of their respective owners.</Typography>
                </Container>
            </Paper>
        )
    }
}