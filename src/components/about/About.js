import React from 'react';
import { Container, Paper, Typography, Divider } from '@material-ui/core';

export default class About extends React.Component{

    render(){
        return(
            <Container style={{padding: '24px'}}>
                <Paper style={{padding: '24px'}}>
                    <Typography variant='h2' align='left'>About</Typography>
                    <Divider style={{margin: '24px'}} />
                    <Typography>During the tail end of World of Warcraft: Wrath of the Lich King, Complexity was founded by Glacial on July 4th, 2010 with the help of Hopeless, Theeotown, Shockerfist, and Holykush. The focus quickly shifted to the next expansion, World of Warcraft: Cataclysm, where Complexity started with Normal Difficulty and was eventually able to complete Dragon Soul on Heroic Difficulty with two separate groups. After some difficulties during World of Warcraft: Mists of Pandaria in the Throne of Thunder, Complexity bounced back and was able to complete Siege of Orgrimmar on Heroic difficulty, earning the Ahead of the Curve achievement. World of Warcraft: Warlords of Draenor showed steady progress as Complexity was able to complete this expansion on Heroic Difficulty, earning the Ahead of the Curve achievement on all raids. Currently in World of Warcraft: Legion, Complexity has continued to show steady progress, earning the Ahead of the Curve Achievement on all current raid content.</Typography>
                </Paper>
            </Container>
        )
    }
}