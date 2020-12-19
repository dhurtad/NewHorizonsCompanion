import React, { Component } from 'react';
import {calcFishes} from './helperfunctions.js';
import {Grid, Box} from '@material-ui/core/'
import FishCard from '../FishCard/';
import './CardFrame.css'
const axios = require('axios');
       
class CardFrame extends Component {
    state = {
        fishes: [],
        availFish: []
    };

    componentDidMount() {
        axios.get('http://acnhapi.com/v1/fish/')
            .then((response) => {                                
                this.setState({fishes: response.data});     

                let fishDict = {};
                let fishFile = this.state.fishes;

                for(let x in fishFile) 
                {                    
                    let fishValue = fishFile[x]; 
                    calcFishes(x, fishValue, fishDict);
                }                   
                this.setState({availFish: Object.values(fishDict)});                
            })
            .catch((error) => {
                console.log(error);
            })                                    
    }

    render() {         
        return(  
            <Box p={1}>
                <Grid container spacing={1}>                
                    {this.state.availFish.map((fish, index) => 
                        <Grid key={index} item xs={2}>
                            <FishCard fishJSON={fish}/>
                        </Grid>
                    )}                          
                </Grid>  
            </Box>     
        );
    }
}

export default CardFrame;