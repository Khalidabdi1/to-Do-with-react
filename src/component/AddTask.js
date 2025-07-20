import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useContext } from "react"
import { Task } from "../context/Tasks"



export default function AddTask({resive}){
    let [input,setInput]=useState("")



    function SandData(e){
        resive(input)
    }

    function Data(e){
        setInput(e.target.value)
    }
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <TextField
             onChange={(e)=>{
                Data(e) 
            }} 
             variant="outlined" label="عنوان المهمة" style={{height:"60px",width:"300px",margin:"10px"}}></TextField>
            <Button 
            onClick={()=>{
                SandData(input)
            }}
            variant="contained" style={{height:"60px",width:"150px",margin:"10px"}}>اضافة</Button>

        </div>

    )
}