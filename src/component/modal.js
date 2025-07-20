import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

export default function FormDialog({showModal,index,element}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const title = formJson.title;
    const description=formJson.description
  
    showModal(title,description,index)
  
    handleClose();
  };

  
  // function findTheElemntToEdit(e){
  //   console.log(e)
  //   }
    console.log(element)
  return (
    <React.Fragment>
         <Button color="edit" size="large"
                   onClick={(e)=>{
                   
                    handleClickOpen()
                   }}
                   > 
                      <EditIcon color="edit"  variant="contained" style={{borderRadius:"50%",border:"1px solid ",padding:"5px"}}></EditIcon>  </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
              {/** here you will containue */}
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="title"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={element.title}
            />
              <TextField
              
              required
              margin="dense"
              id="name"
              name="description"
              label="description"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={element.paragraph}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Subscribe</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
