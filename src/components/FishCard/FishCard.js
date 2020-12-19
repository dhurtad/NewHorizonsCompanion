import React from "react";
import { CardContent, Card} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import FishInfo from './FishInfo';
import './FishCard.css';


const useStyles = makeStyles({
    root: {  
      height:"100%",                
      backgroundColor: '#F0EBB1',                    
    },
  });

export default function FishCard(props) {
    const classes = useStyles();

    return(              
        <Card className={classes.root}>                      
          <CardContent>   
            <FishInfo fish={props.fishJSON}/>
          </CardContent>                      
        </Card>                  
    );
}