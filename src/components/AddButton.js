
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addTask } from '../redux/actions';
import { connect } from 'react-redux';

 function AddButton(props){
    const [val , setVal]  = useState()

    function clickHandle(){
        val ? props.addtask(val) : console.log()
        setVal("")
    }
    return(
            <Box textAlign="center" margin={2}>
                <TextField id="task" label="New Task" variant="outlined"  value ={val} onChange={e=> setVal(e.target.value)} />
                
                <IconButton component="span" size='large' color='primary' onClick={clickHandle} >
                    <AddIcon fontSize='large'/>
                    
                </IconButton>
                    
                
            </Box>

    )
}

const mapDispatchToProps = dispatch =>{
    return {
        addtask : val => dispatch(addTask(val))
    }

}

export default connect(null,mapDispatchToProps)(AddButton)