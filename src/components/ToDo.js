
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';
import {  toggleStatus ,delTask,editTask } from '../redux/actions';

 function ToDo( props ){
  const [val,setVal] = useState()
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setVal(props.todo.text)
  };
  const handleClose = () => {
    setOpen(false);
  };
  function editTask(){
    setOpen(false)
    //console.log(val)
    props.edtTask(props.index,val)
  }


    return(
        <ListItem >
            <ListItemIcon onClick={()=>{props.tglStatus(props.index )}} >
                <Checkbox
                  edge="start"
                  checked={props.todo.status}
                  
                />
              </ListItemIcon>
              <ListItemText  id={props.index} primary={props.todo.text} />
              <IconButton  aria-label="edit" onClick={handleOpen}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" >
                <DeleteIcon onClick={()=>{props.deleteTask(props.index)}}/>
              </IconButton>
              <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box sx={{ ...style, width: 200 }}>
                <TextField id="task" label="Edit Task" variant="outlined"  value ={val} onChange={e=> setVal(e.target.value)} />
                <Button onClick={editTask}>Submit</Button>
                </Box>
              </Modal>
        </ListItem>
        
        
        
    )
                
              
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid rgb(224, 240, 211)',
  borderRadius :'10px',
  boxShadow: '2px 2px 10px rgb(100,130,100)',
  pt: 5,
  px: 8 ,
  pb: 3,
};

const mapDispatchToProps = dispatch =>{
  return {
      tglStatus : val => dispatch(toggleStatus(val)),
      edtTask : (id,text) => dispatch(editTask(id,text)),
      deleteTask : val => dispatch(delTask(val))
  }

}

export default connect(null,mapDispatchToProps)(ToDo)