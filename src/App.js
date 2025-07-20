import "./App.css" 
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import { Link,Route,Routes } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import {green, pink,purple,yellow,grey,blue,red}from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import All from "./component/All";
import Complete from "./component/complete";
import Incomplete from "./component/lncomplete";
import AddTask from "./component/AddTask";
import { Task } from "./context/Tasks";
import Alet from ".//component/Alert";
import { ShowAlert } from "./context/Tasks";
import FormDialog from "./component/modal";




const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[900],
    },
    notWork: {
      main:grey[500]
    },
    edit: {
      main :blue[900]
    },
    red:{
      main:red[900]
    }
  },
});





export default function App() {
let [disabled,setDisabled]=useState({
  ButtonOne:true,ButtonTwo:true,ButtonThree:true
})

let [input,setInput]=useState([
  {heade:"",paragrapg:""}
])

let [showAlert,setAlert]=useState(0)

function changeAlert(e){
  
// setAlert(e)
if(e===false){
  setAlert(showAlert+1)

}else{
  setAlert(showAlert+1)
}
}

let [arrayList,setArrayList]=useState([])
//data is here that will display
// console.log(arrayList)
//when is check
let [edits,setEdit]=useState([])


function checkTask(index){
arrayList.map((e,i)=>{
  if(i===index){
 setEdit(prev =>[...prev,arrayList[i]])
 //هذا يسبب مشكلة عن الحذف من مكتمل يحذف كمان من غير مكتمل
 deleteItem(index)
  }
})

}
//delete from complate list
function CompleteDelete(index){
  setEdit(prev =>prev.filter((e,i)=>{
    if(!(i===index)){
      return true
    }
  }))
  }


// console.log(edits)
//delete from arr

function deleteItem(index){
setArrayList(prev =>prev.filter((e,i)=>{
  if(!(i===index)){
    return true
  }
}))
}

function reciveData(e){
  let newTask=  {title:e,paragraph:""}
  setArrayList(prev=>[...prev,newTask])
  
  setInput(e) 
  }

// console.log(input)

//edit for paragraph and head

function EditForm(titleForm,descriptionForm,index){

console.log(`from app.js ${titleForm} and ${descriptionForm} and the element is ${index} `)
arrayList.map((e,i)=>{
  if(i===index){
    // setArrayList([...arrayList,{title:titleForm,paragraph:descriptionForm}])
 //هذا يسبب مشكلة عن الحذف من مكتمل يحذف كمان من غير مكتمل
 e.title=titleForm
 e.paragraph=descriptionForm
 setArrayList([...arrayList])
  }
})
}

function EditFormComplete(titleForm,descriptionForm,index){

  console.log(`from app.js ${titleForm} and ${descriptionForm} and the element is ${index} `)
  edits.map((e,i)=>{
    if(i===index){
      // setArrayList([...arrayList,{title:titleForm,paragraph:descriptionForm}])
   //هذا يسبب مشكلة عن الحذف من مكتمل يحذف كمان من غير مكتمل
   e.title=titleForm
   e.paragraph=descriptionForm
   setEdit([...edits])
    }
  })
  }
  

  // function collectFormAll(co,y)

return(
  <ShowAlert.Provider value={showAlert}>
  <Task.Provider value={arrayList}>
            <ThemeProvider theme={theme}>
          <div className={"App"}>
          <Container style={{backgroundColor:"white",textAlign:"center",borderRadius:"8px"}}maxWidth="sm" >

              <h1 className="title">مهامي</h1>
              <hr></hr>
              
              <ButtonGroup style={{marginTop:"20px"}}  >
                <Link to={"/All"}>
                    <Button  color={disabled.ButtonOne ? "primary" : "notWork"}  onClick={()=>{   setDisabled({...disabled,ButtonTwo:false,ButtonThree:false,ButtonOne:true})}}>الكل</Button>
                </Link>

                <Link to={"/complete"}>
                    <Button color={disabled.ButtonTwo? "primary" : "notWork"} onClick={()=>{setDisabled({...disabled,ButtonOne:false,ButtonThree:false,ButtonTwo:true})}}>منجز</Button>
                </Link>

                <Link to={"/Incomplete"}>
                    <Button color={disabled.ButtonThree ? "primary" : "notWork"} onClick={()=>{setDisabled({...disabled,ButtonTwo:false,ButtonOne:false,ButtonThree:true})}}>غير منجز</Button>
                </Link>
              </ButtonGroup>


              <Routes>
                {/** maybe the first line is incorrect */}
                <Route path="/" element={<All edito={edits}  delet={CompleteDelete} change={setAlert} name={changeAlert} checkTa={checkTask}   showModal={EditFormComplete}  />}></Route>
                <Route path="/All" element={<All edito={edits}  delet={CompleteDelete} change={setAlert} name={changeAlert} checkTa={checkTask}   showModal={EditFormComplete}  />} ></Route>
                <Route path="/complete" element={<Complete edito={edits} delet={CompleteDelete} change={setAlert} name={changeAlert} checkTa={checkTask}   showModal={EditFormComplete}  />}></Route>
                <Route path="/Incomplete" element={<Incomplete delet={deleteItem} change={setAlert} name={changeAlert} checkTa={checkTask} showModal={EditForm}    />}></Route>

              </Routes>

              <AddTask resive={reciveData}></AddTask>
          </Container>

              
           <div style={{position:"absolute",Button:"0px",left:"-10px",display:"flex",alignItems:"flex-end",justifyContent:"flex-end",backgroundColor:"red",marginTop:"700px",marginLeft:"20px"}}>
<Alet  change={showAlert}/>
</div> 
          </div>
          </ThemeProvider>
 </Task.Provider>
 </ShowAlert.Provider>
)

  
}



