import React,{useState} from 'react'

import {ErrorMessage,WarningMessage,SuccessMessage} from 'react-handling'
import 'react-handling/dist/index.css'
const App=()=>{
    const[show,setShow]=useState(true);
    const Handling =()=>{
      setShow(false);
    }
    return <ErrorMessage
            show={show}
            btnText="Yes" //default Ok
            message="Error" //Header Title
            onConfirm={Handling}
            textMessage="Netowrk Error" //Text error
                />
  }
  // the same way for WarningMessage and SuccessMessage
  export default App
