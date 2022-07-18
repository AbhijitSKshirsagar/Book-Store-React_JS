import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import cx from 'clsx';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { CardContent, CardMedia } from "@mui/material";
import { CardActionArea, FormControl } from "@mui/material";
import Header from '../../component/Header/Header'



const useStyles = makeStyles(({ breakpoints, spacing }) => ({

    root: {
        marginTop: "2rem",
        borderRadius: spacing(2),
        transition: '0.3s',
        position: 'relative',
        width: 535,
        overflow: 'initial',
        background: '#ffffff',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
            paddingTop: spacing(2),
        },
    },
    media: {
        width: '40%',
        height: 0,
        paddingBottom: '48%',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        marginRight: "5rem",
        [breakpoints.up('md')]: {
            width: '90%',
            marginLeft: spacing(-3),
            marginTop: 0,
            transform: 'translateX(-8px)',
        },
    },
    content: {
        padding: 50,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));

function Buy(props) {

    return (
            <div>
            <Header />
                <div className="form-content">
                        <div>
                            <TextField
                                label="ATM Card Name"
                                marginRight="10px"                              
                                required/>	
                            <TextField
                                label="CVV"                                                           
                                required />
                            </div> <br />
                            <div>
                            <TextField
                                label="Card Number"                                
                                required
                                 />
                            <TextField
                                label="Ammount"                              
                                required />
                            </div> <br />  
                            <TextField
                                label="Bank Name"  
                                required />
                            </div> <br />                                               
                            <div>
                            <TextField
                                label="city"                             
                                required />
                            <TextField
                                label="Country"                             
                                required />
                            </div >
                            <div className="Button">
                            <Button variant="outlined" color="success">Conform</Button>
                            </div>
                </div >
    );

}

export default Buy;