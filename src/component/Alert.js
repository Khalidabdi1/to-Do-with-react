import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertTitle from '@mui/material/AlertTitle';
import { red } from '@mui/material/colors';
import { useContext, useEffect, useState } from 'react';
import { ShowAlert } from '../context/Tasks';

export default function Alet({change}){
//     let setAlert =useContext(ShowAlert)
//     console.log(setAlert)
let[hideAlert,setHidealert]=useState(false)


useEffect(()=>{
    
   if(change >0){
        setHidealert(true)

    let timer = setTimeout(()=>{
setHidealert(false)
        },3000)
  
        return ()=> clearTimeout(timer)
   }


},[change])


    return(
        
       <Stack  direction={"ltr"}   style={{display:hideAlert?"block":"none"}} >
                    <Alert  dir='ltr' severity="error"  >
                    <AlertTitle>Delete</AlertTitle>
                   this item is delete
                    </Alert>
       </Stack>
    )
}