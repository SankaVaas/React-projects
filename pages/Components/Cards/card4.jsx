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

export default function ActionAreaCard() {
  
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
          image="images/4.jpg"
          alt="green iguana"
        />
        <CardContent>
          <div>
          <Typography gutterBottom variant="h5" component="div" textAlign='left'>
          Churn Prediction
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign='left'>
          Predict customer churn using Artificial Neural Network
          </Typography>
        </div>
                </CardContent>
      </CardActionArea>
    </Card>

    </Button>

    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
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