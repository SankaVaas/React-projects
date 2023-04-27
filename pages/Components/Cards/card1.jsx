import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic'
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

export default function ActionAreaCard(props) {
  const { children, onClose, ...other } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  return (
    
    <div>
    <Button variant="none" onClick={function(event){ handleClickOpen() }}>
      
    <Card sx={{ maxWidth: 300, maxHeight:500 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image="images/1.jpg"
          alt="green iguana"
        />
      
        <CardContent>
          <div>
          <Typography gutterBottom variant="h5" component="div" textAlign='left'>
          Geographical Visualize : Sri Lanka
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign='left'>
          Visualize your data on the Sri Lankan map
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    </Button>

    <Dialog
        fullScreen={fullScreen}
        open={open}
        
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Grographical Visualization : Sri Lanka "}

           
           
      

        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          You can visualize your data based on the divisional secretory area in Sri Lanka

          ශ්‍රී ලංකාවේ ප්‍රාදේශීය ලේකම් ප්‍රදේශය මත පදනම්ව ඔබට ඔබේ දත්ත දෘශ්‍යමාන කළ හැක
            <img src= 'images/d1-1.jpg'/>
          You can run your analysis based on GS divisions in sri lanka using our ML models. Then you can use this tool to visualize them.

          Before you doing it, you may add the id related to the GS division. Once you completed that👇
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}