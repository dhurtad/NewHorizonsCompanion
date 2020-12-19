import React from 'react';
import {Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IsAllDay, FishName } from './helperfunctions.js'
import bellbagIcon from './images/bell_bag.png';
import islandIcon from './images/island.png';
import clockIcon from './images/clock.png';
import shadowIcon from './images/shadow.JPG';

const useStyles = makeStyles({
    infoContainer:{      
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',         
    },
    titleText:{
      fontWeight: 'bold',
      fontSize: '130%'
    },
    titleIcon: {
        height: '15%',
        width: '15%',       
        paddingLeft: '5px', 
    },
    texticonContainer: {
        display: 'flex',                 
        alignItems: "center",   
        padding: '5px',  
        fontFamily: 'FinkHeavyimport',           
    },
    bodyIcon: {
        height: '30px',
        width: '30px',
        paddingRight: '5px',
    },
});

export default function FishInfo(props) 
{
    let fish = props.fish;
    let classes = useStyles();  
    
    return (    
        <Box>                          
            <Box display="flex" width="100%" alignItems="center">
                <FishName className={classes.titleText} fish={fish}/>
                <img src={fish["icon_uri"]} alt="fish icon" className={classes.titleIcon}></img>   
            </Box>   

            <Box className={classes.infoContainer}> 
                <Box className={classes.texticonContainer}>
                    <img src={bellbagIcon} alt='bell bag icon' className={classes.bodyIcon} />        
                    <Typography>{fish.price}</Typography>
                </Box>

                <Box className={classes.texticonContainer}>
                    <img src={islandIcon} alt='island icon' className={classes.bodyIcon} />        
                    <Typography>{fish.availability['location']}</Typography>  
                </Box>
                    
                <Box className={classes.texticonContainer}>
                    <img src={clockIcon} alt="clock icon" className={classes.bodyIcon} />
                    <IsAllDay fish={fish}/>
                </Box>

                <Box className={classes.texticonContainer}>
                    <img src={shadowIcon} alt="shadow icon" className={classes.bodyIcon} />
                    <Typography>{fish.shadow}</Typography>                    
                </Box>     
            </Box>                
        </Box>
    );    
}
