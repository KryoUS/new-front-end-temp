import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';

//TODO: This needs to be pulled from DB and not hard-coded
const wowheadAffixData = {
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
    }
}

export default class MythicAffixes extends React.Component {
    constructor() {
        super();

        this.state = {
            affixes: [
                {
                    week: 1,
                    baseAffix: 'Fortified',
                    plusFour: 'Bursting',
                    plusSeven: 'Storming',                    
                    type: 'Tormented'
                },
                {
                    week: 2,
                    baseAffix: 'Tyrannical',
                    plusFour: 'Raging',
                    plusSeven: 'Volcanic',                    
                    type: 'Tormented'
                },
                {
                    week: 3,
                    baseAffix: 'Fortified',
                    plusFour: 'Inspiring',
                    plusSeven: 'Grievous',                    
                    type: 'Tormented'
                },
                {
                    week: 4,
                    baseAffix: 'Tyrannical',
                    plusFour: 'Spiteful',
                    plusSeven: 'Necrotic',                    
                    type: 'Tormented'
                },
                {
                    week: 5,
                    baseAffix: 'Fortified',
                    plusFour: 'Bolstering',
                    plusSeven: 'Quaking',                  
                    type: 'Tormented'
                },
                {
                    week: 6,
                    baseAffix: 'Tyrannical',
                    plusFour: 'Sanguine',
                    plusSeven: 'Storming',
                    type: 'Tormented'
                },
                {
                    week: 7,
                    baseAffix: 'Fortified',
                    plusFour: 'Raging',
                    plusSeven: 'Explosive',
                    type: 'Tormented'
                },
                {
                    week: 8,
                    baseAffix: 'Tyrannical',
                    plusFour: 'Bursting',
                    plusSeven: 'Volcanic',
                    type: 'Tormented'
                },
                {
                    week: 9,
                    baseAffix: 'Fortified',
                    plusFour: 'Spiteful',
                    plusSeven: 'Grievous',
                    type: 'Tormented'
                },
                {
                    week: 10,
                    baseAffix: 'Tyrannical',
                    plusFour: 'Inspiring',
                    plusSeven: 'Quaking',
                    type: 'Tormented'
                },
                {
                    week: 11,
                    baseAffix: 'Fortified',
                    plusFour: 'Sanguine',
                    plusSeven: 'Necrotic',
                    type: 'Tormented'
                },
                {
                    week: 12,
                    baseAffix: 'Tyrannical',
                    plusFour: 'Bolstering',
                    plusSeven: 'Explosive',
                    type: 'Tormented'
                },
                
            ],
            raiderIOData: {},
        }
    }
    
    componentDidMount = () => {
        axios.get('/api/raiderio/mythicaffixes').then(res => {
            this.setState({ raiderIOData: res.data });
        }).catch(raiderIOMythicAffixesError => {
            console.log("Mythic Affix fetch issue.");
        });
    }

    render() {
        return (
            this.state.raiderIOData.affix_details ? 
                this.state.raiderIOData.affix_details.map(obj => {
                    return <IconButton
                        key={`affixId${obj.id}`}
                        size={this.props.iconSize}
                        href={obj.wowhead_url} 
                        data-wowhead={`affix=${obj.id}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        <img 
                        style={{height: this.props.iconHW, width: this.props.iconHW}}
                        src={`https://render.worldofwarcraft.com/us/icons/56/${obj.icon}.jpg`} 
                        onError={e => {
                            e.target.src = 'https://render.worldofwarcraft.com/us/icons/56/inv_misc_questionmark.jpg';
                        }}
                        />
                    </IconButton>
                })
            :
            null
        );
    }
}