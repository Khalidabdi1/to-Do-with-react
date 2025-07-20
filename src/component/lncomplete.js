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
import FormDialog from "./modal";



export default  function Incomplete({name,delet,checkTa,showModal,index}){
    let [btn,setBtn]=useState(false)
    let [modalBtn,setModalBtn]=useState(false)

    let context =useContext(Task)
let theme=useTheme()



// let {arrayList}=useContext(Task)
// console.log(context)

// console.log(arrayList)

function reciveDataBTN(){
name(btn) 

}
function findDelete(indexItem){
    delet(indexItem)

}



// function sandModalInfo(){
//     showModal(modalBtn)
// }
console.log(context)
    let TaskList=context.map((e,i)=>{
        return(
            <div key={i} color={theme.palette.primary.main} style={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
                <div>
                   <h1 color="primary">{e.title}</h1>
                   <p>{e.paragraph}</p>
                </div>

                <div>
                    <Button color="secondary" size="large"
                    onClick={()=>{
                        checkTa(i)
                    }}
                    
                    >  <CheckCircleOutlineIcon color="secondary"  style={{borderRadius:"50%",}} fontSize="large"></CheckCircleOutlineIcon></Button>
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


