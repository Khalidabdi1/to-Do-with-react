import { useState } from "react"
import { useContext } from "react"
import { Task } from "../context/Tasks"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from "@emotion/react";
import Button from "@mui/material/Button";
import Alet from "./Alert";
import { ShowAlert } from '../context/Tasks';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormDialog from "./modal";

export default  function Complete({edito,checkTa,change,name,delet,showModal}){
    let [btn,setBtn]=useState(false)


let context=useContext(Task)

function reciveDataBTN(){
    name(btn) 
    
    }
    function findDelete(indexItem){
        delet(indexItem)
    
    }
    
    let TaskList=edito.map((e,i)=>{
        return(
            <div key={i}  style={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
                <div>
                   <h1 color="primary">{e.title}</h1>
                   <p>{e.paragraph}</p>
                </div>

                <div>
                    <Button color="secondary" size="large"
                    onClick={()=>{
                        checkTa(i)
                    }}
                    
                    >  <CheckCircleIcon color="secondary"  style={{borderRadius:"50%",}} fontSize="large"></CheckCircleIcon></Button>
                <FormDialog showModal={showModal} index={i} element={e}></FormDialog>

                   <Button color="red" size="large" onClick={
                    ()=>{if(btn===false){setBtn(true)}else{setBtn(false)}
                    reciveDataBTN()
                    findDelete(i)
                  
                    // deleteItem()
                }
                   
                }
                    
                    >          <DeleteIcon color="red"  style={{borderRadius:"50%",border:"1px solid ",padding:"5px"}}></DeleteIcon>   </Button>
                </div>
            </div>
        )
    })


    
    return(
        <>
       <div>
        {TaskList}
       </div>
        </>
    )
}