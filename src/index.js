import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ErrorMessage = (props) => {

  return (

    <SweetAlert style={{ ...props.style }}

      show={props.show}
      type="error"
      confirmBtnText={props.btnText ? props.btnText : "Ok"}
      confirmBtnBsStyle="danger"
      title={props.message}
      onConfirm={props.onConfirm}
    >
      {props.textMessage}
    </SweetAlert>

  )
}
export const WarningMessage = (props) => {


  return (
    <SweetAlert style={{ ...props.style }}

      show={props.show}
      type="warning"
      confirmBtnText={props.btnText ? props.btnText : "Ok"}
      confirmBtnBsStyle="warning"
      title={props.message}
      onConfirm={props.onConfirm}
    >
      {props.textMessage}
    </SweetAlert>
  )
}
export const SuccessMessage = (props) => {


  return (
    <SweetAlert style={{ ...props.style }}

      show={props.show}
      type="success"
      showCancel
      cancelBtnBsStyle="danger"
      confirmBtnText={props.btnText ? props.btnText : "Ok"}
      confirmBtnBsStyle="success"
      title={props.message}
      onConfirm={props.onConfirm}
    >
      {props.textMessage}
    </SweetAlert>
  )
}

export const AskMessage = (props) => {
  return (
    <SweetAlert style={{ ...props.style }}
      show={props.show}
      title={props.message}
      showCancel
      cancelBtnText={props.cancelBtnText ? props.cancelBtnText : 'Cancel'}
      cancelBtnBsStyle="danger"
      confirmBtnText={props.btnText ? props.btnText : "Ok"}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      btnSize='m'
    >
      {props.textMessage}
    </SweetAlert>


  )
}

export const SliderMessage = (props) => {
  const notify = toast[props.type](<p style={{ ...props.style }}>{props.message}</p>, {
    position: props.position ? props.position : 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

  })
  return (
    <React.Fragment>
      <ToastContainer />
    </React.Fragment>

  )
}

export const MessageHandling = (props) => {


  const notify = (type, msg) => {
    return (
      toast[type](<p style={{ ...props.style }}>{msg}</p>, {
        position: props.position ? props.position : 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      })


    )
  }
  const check = (obj) => {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {

      if (typeof obj[keys[i]] === 'object')
        x(obj[keys[i]])
      else {
        if ((keys[i] === 'error' && obj[keys[i]] !== '') || (keys[i] === 'warning' && obj[keys[i]] !== '') || (keys[i] === 'success' && obj[keys[i]] !== '')) {
          notify(keys[i], obj[keys[i]])
        }
      }

    }
  }
  if (props.state) {
    check(props.state);
  }
  return (
    <React.Fragment>
      <ToastContainer />
      {props.children}
    </React.Fragment>
  )

}
