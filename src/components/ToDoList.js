import ToDo from "./ToDo"
import { List } from "@mui/material"
import {  Box} from "@mui/system"
import { connect } from "react-redux"



  function ToDoList(props){
      console.log(props.task)
    if(props.task.length > 0){                      
        return(
            
            <Box textAlign={"center"} marginLeft={"20%"} marginRight={"20%"} >
                <List sx={{ maxwidth: '60%',  bgcolor: 'rgb(208 , 217, 211)' , borderRadius:'8px' }}>
                {
                        props.task.map((task,index) =>{
                            if(task.text)
                                return(<ToDo key={index} index={index} todo={task}/>)
                        
                        })
                    }
                    
                </List>
            </Box>
            
        )
    }
}

const mapStateToProps = (state)=>{

    return {task:state }
}

const mapDispatchToProps = dispatch =>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)