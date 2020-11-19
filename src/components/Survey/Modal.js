import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function AlertDialogSlide(props) {
  //const [open, setOpen] = React.useState(false);
  

  const handleAcept = () => {
      props.eliminar(props.input)
      props.abrirModal()
  }

  const handleClose = () => {
    props.abrirModal()
  };

  useEffect(() => { 
    console.log(props.input)
    console.log(props.nombre)
  })

  return (
    <div>
      <Dialog
        open={props.openModal}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Estás seguro que querés eliminar la siguiente encuesta?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {props.nombre}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAcept} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}