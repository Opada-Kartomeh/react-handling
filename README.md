# react-handling

> handling error message or success message
  Check your state if it has any errors or success or warning messages

[![NPM](https://img.shields.io/npm/v/react-handling.svg)](https://www.npmjs.com/package/react-handling) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-handling
```

## Usage
```jsx
import React, { useState } from 'react'

import { ErrorMessage, WarningMessage, SuccessMessage } from 'react-handling'
import 'react-handling/dist/index.css'
const App = () => {
  const [show, setShow] = useState(true)
  const Handling = () => {
    // do something
    setShow(false)
  }
  return (
    <ErrorMessage
      // you can also use style property for width or height or font size or...
      show={show}
      btnText='Yes' //default Ok
      message='Error' //Header Title
      onConfirm={Handling}
      textMessage='Netowrk Error' //Text error
    />
  )
}
// the same way for WarningMessage and SuccessMessage
export default App
```

```jsx
import React, { useState } from 'react'
import { AskMessage } from 'react-handling'
import 'react-handling/dist/index.css'
const App = () => {
  const [show, setShow] = useState(true)
  const Handling = () => {
    // do something
    setShow(false)
  }
  const HandlingCancel = () => {
    //do something
    setShow(false)
  }
  return (
    <AskMessage
      // you can also use style property for width or height or font size or...
      show={show}
      btnText='Yes' //default Ok
      cancelBtnText='No' //default Cancel
      message='Are you sure' //Header Title
      onConfirm={Handling}
      textMessage='are you sure?' //Normal Text
      onCancel={HandlingCancel}
    />
  )
}
export default App
```

```jsx
import React from 'react'

import {SliderMessage} from 'react-handling'
import 'react-handling/dist/index.css'
const App=()=>{
  return(
   <SliderMessage
   //you can also use style property for style your message
    type="error"// you can use success type or warning type
    message="Password Error"
    position="top-center" // default bottom-center you can use top-left top-rigth bottom-left bottom-rigth
     />
     )
  }
  export default App
  

```

```jsx
import React,{useState} from 'react'

import { MessageHandling } from 'react-handling'
import 'react-handling/dist/index.css'
const App = () => {
   const [state,setState]= useState({
     text:'hello'
     num:'12345',
     error:'error'
     success:'success'
     warning:'warning'
   })
  return(
      //MessageHandling will search in your state if it has a error or warning or success message and will show it using  react-toastify
     <MessageHandling state={state}>
       {/* <childrenComponent>*/}
     </MessageHandling>
  )
}
export default App
```

## License

MIT © [Opada-Kartomeh](https://github.com/Opada-Kartomeh)
