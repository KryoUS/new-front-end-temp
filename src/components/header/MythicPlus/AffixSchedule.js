import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Container, Grid, Dialog, Paper, Typography } from '@material-ui/core';
import moment from 'moment';

//TODO: This needs to be pulled from DB and not hard-coded
const affixes = {
    Fortified: {
        id: 10,
        icon: 'ability_toughness'
    },
    Tyrannical: {
        id: 9,
        icon: 'achievement_boss_archaedas'
    },
    Teeming: {
        id: 5,
        icon: 'spell_nature_massteleport'
    },
    Raging: {
        id: 6,
        icon: 'ability_warrior_focusedrage'
    },
    Bolstering: {
        id: 7,
        icon: 'ability_warrior_battleshout'
    },
    Sanguine: {
        id: 8,
        icon: 'spell_shadow_bloodboil'
    },
    Bursting: {
        id: 11,
        icon: 'ability_ironmaidens_whirlofblood'
    },
    Necrotic: {
        id: 4,
        icon: 'spell_deathknight_necroticplague'
    },
    Skittish: {
        id: 2,
        icon: 'spell_magic_lesserinvisibilty'
    },
    Volcanic: {
        id: 3,
        icon: 'spell_shaman_lavasurge'
    },
    Explosive: {
        id: 13,
        icon: 'spell_fire_felflamering_red'
    },
    Quaking: {
        id: 14,
        icon: 'spell_nature_earthquake'
    },
    Grievous: {
        id: 12,
        icon: 'ability_backstab'
    },
    Reaping: {
        id: 117,
        icon: 'ability_racial_embraceoftheloa_bwonsomdi'
    },
    Beguiling: {
        id: 119,
        icon: 'spell_shadow_mindshear'
    },
    Awakened: {
        id: 120,
        icon: 'trade_archaeology_nerubian_obelisk'
    },
    Prideful: {
        id: 121,
        icon: 'spell_animarevendreth_buff'
    },
    Inspiring: {
        id: 122,
        icon: 'spell_holy_prayerofspirit'
    },
    Spiteful: {
        id: 123,
        icon: 'spell_holy_prayerofshadowprotection'
    },
    Storming: {
        id: 124,
        icon: 'spell_nature_cyclone'
    },
    Tormented: {
        id: 128,
        icon: 'spell_animamaw_orb'
    },
    Encrypted: {
        id: 130,
        icon: 'spell_progenitor_orb'
    }
}

const schedule = [
    {
        week: 1,
        baseAffix: 'Fortified',
        plusFour: 'Bursting',
        plusSeven: 'Storming',                    
        type: 'Encrypted'
    },
    {
        week: 2,
        baseAffix: 'Tyrannical',
        plusFour: 'Raging',
        plusSeven: 'Volcanic',                    
        type: 'Encrypted'
    },
    {
        week: 3,
        baseAffix: 'Fortified',
        plusFour: 'Inspiring',
        plusSeven: 'Grievous',                    
        type: 'Encrypted'
    },
    {
        week: 4,
        baseAffix: 'Tyrannical',
        plusFour: 'Spiteful',
        plusSeven: 'Necrotic',                    
        type: 'Encrypted'
    },
    {
        week: 5,
        baseAffix: 'Fortified',
        plusFour: 'Bolstering',
        plusSeven: 'Quaking',                  
        type: 'Encrypted'
    },
    {
        week: 6,
        baseAffix: 'Tyrannical',
        plusFour: 'Sanguine',
        plusSeven: 'Storming',
        type: 'Encrypted'
    },
    {
        week: 7,
        baseAffix: 'Fortified',
        plusFour: 'Raging',
        plusSeven: 'Explosive',
        type: 'Encrypted'
    },
    {
        week: 8,
        baseAffix: 'Tyrannical',
        plusFour: 'Bursting',
        plusSeven: 'Volcanic',
        type: 'Encrypted'
    },
    {
        week: 9,
        baseAffix: 'Fortified',
        plusFour: 'Spiteful',
        plusSeven: 'Grievous',
        type: 'Encrypted'
    },
    {
        week: 10,
        baseAffix: 'Tyrannical',
        plusFour: 'Inspiring',
        plusSeven: 'Quaking',
        type: 'Encrypted'
    },
    {
        week: 11,
        baseAffix: 'Fortified',
        plusFour: 'Sanguine',
        plusSeven: 'Necrotic',
        type: 'Encrypted'
    },
    {
        week: 12,
        baseAffix: 'Tyrannical',
        plusFour: 'Bolstering',
        plusSeven: 'Explosive',
        type: 'Encrypted'
    },
    
]

export default function AffixSchedule(props){
    return (
        <Dialog
        open={props.scheduleOpen}
        onClose={props.scheduleToggle}
        
        >
            <Paper style={{padding: 12}}>
                    <Grid container direction='column'> {/*Calendar*/}
                        <Grid item container>
                            <Grid item xs={3}>
                                <Container>
                                    <Typography>+2</Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container>
                                    <Typography>+4</Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container>
                                    <Typography>+7</Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container>
                                    <Typography>Seasonal</Typography>
                                </Container>
                            </Grid>
                        </Grid>
                        {schedule.map(obj => {
                            const currentWeek = (moment().week() % 12) - 2 === obj.week;
                            return <Grid key={`affixWeek${obj.week}`} item container style={{backgroundColor: `${currentWeek ? '#B388FF' : null}` }}> {/*Week*/}
                                <Grid item xs={3}> {/*baseAffix*/}
                                    <Button 
                                    variant="text" 
                                    size="small"
                                    style={{color: currentWeek ? 'black' : null, fontSize: window.innerWidth < 600 ? 10 : null}}
                                    href={`https://wowhead.com/affix=${affixes[obj.baseAffix].id}`} 
                                    data-wowhead={`affix=${affixes[obj.baseAffix].id}`}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    startIcon={
                                        <img
                                        style={{width: 14, height: 14}} 
                                        src={`https://render.worldofwarcraft.com/us/icons/56/${affixes[obj.baseAffix].icon}.jpg`} 
                                        onError={e => {
                                            e.target.src = 'https://render.worldofwarcraft.com/us/icons/56/inv_misc_questionmark.jpg';
                                        }}
                                        />
                                    }>
                                        {obj.baseAffix}
                                    </Button>
                                </Grid>
                                <Grid item xs={3}> {/*plusFour*/}
                                    <Button 
                                    variant="text" 
                                    size="small"
                                    style={{color: currentWeek ? 'black' : null, fontSize: window.innerWidth < 600 ? 10 : null}}
                                    href={`https://wowhead.com/affix=${affixes[obj.plusFour].id}`} 
                                    data-wowhead={`affix=${affixes[obj.plusFour].id}`}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    startIcon={
                                        <img 
                                        style={{width: 14, height: 14}} 
                                        src={`https://render.worldofwarcraft.com/us/icons/56/${affixes[obj.plusFour].icon}.jpg`} 
                                        onError={e => {
                                            e.target.src = 'https://render.worldofwarcraft.com/us/icons/56/inv_misc_questionmark.jpg';
                                        }}
                                        />
                                    }>
                                        {obj.plusFour}
                                    </Button>
                                </Grid>
                                <Grid item xs={3}> {/*plusSeven*/}
                                    <Button 
                                    variant="text" 
                                    size="small"
                                    style={{color: currentWeek ? 'black' : null, fontSize: window.innerWidth < 600 ? 10 : null}}
                                    href={`https://wowhead.com/affix=${affixes[obj.plusSeven].id}`} 
                                    data-wowhead={`affix=${affixes[obj.plusSeven].id}`}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    startIcon={
                                        <img 
                                        style={{width: 14, height: 14}} 
                                        src={`https://render.worldofwarcraft.com/us/icons/56/${affixes[obj.plusSeven].icon}.jpg`} 
                                        onError={e => {
                                            e.target.src = 'https://render.worldofwarcraft.com/us/icons/56/inv_misc_questionmark.jpg';
                                        }}
                                        />
                                    }>
                                        {obj.plusSeven}
                                    </Button>
                                </Grid>
                                <Grid item xs={3}> {/*type*/}
                                    <Button 
                                    variant="text" 
                                    size="small"
                                    style={{color: currentWeek ? 'black' : null, fontSize: window.innerWidth < 600 ? 10 : null}}
                                    href={`https://wowhead.com/affix=${affixes[obj.type].id}`} 
                                    data-wowhead={`affix=${affixes[obj.type].id}`}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    startIcon={
                                        <img 
                                        style={{width: 14, height: 14}} 
                                        src={`https://render.worldofwarcraft.com/us/icons/56/${affixes[obj.type].icon}.jpg`} 
                                        onError={e => {
                                            e.target.src = 'https://render.worldofwarcraft.com/us/icons/56/inv_misc_questionmark.jpg';
                                        }}
                                        />
                                    }>
                                        {obj.type}
                                    </Button>
                                </Grid>
                            </Grid>
                        })}
                    </Grid>
            </Paper>
        </Dialog>
    );
}
