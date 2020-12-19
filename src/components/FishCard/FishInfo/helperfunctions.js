import React from 'react';
import { Typography } from '@material-ui/core';
import { cap_first } from '../../../helpers/stringhelpers.js';




export function IsAllDay(props) {
    let fishBool = props.fish.availability['isAllDay'];

    if(fishBool)
    {
      return (
        <Typography>All Day</Typography>
      );
    }
    else 
    {
      return (
        <Typography>{props.fish.availability['time']}</Typography>
      );
    }
}

 

export function FishName(props) {

  let rarityColors = {
    Common: "#4B69FF",    
    Uncommon: "#8847FF",
    Rare: "#EB4B4B",
    UltraRare: "#E4AE33",  
  }

  let fishRarity = props.fish.availability['rarity'];
  
  if(fishRarity === "Ultra-rare"){
    return (    
      <Typography 
      className={props.className} 
      style={{color: rarityColors["UltraRare"]}}>
          {cap_first(props.fish.name["name-USen"])}          
      </Typography>    
    );  
  }
  else {
    return (
      <Typography className={props.className} style={{color: rarityColors[fishRarity]}}>{cap_first(props.fish.name["name-USen"])}</Typography>
    );
  }  
}