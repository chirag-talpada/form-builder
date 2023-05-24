import React,{Fragment} from 'react'
import './FormPanel.css'

type props={
    children:JSX.Element,

} 

const FormPanel = ({children}:props) => {
  return (
    <Fragment>{children}</Fragment>
  )
}

export default FormPanel