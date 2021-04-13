import React from 'react'
import FormLogin from '../components/FormLogin'

export default function Login() {
const submit = async({email,password}) => {
  console.log(email , password);
}

    return(
      <>
      <FormLogin onSubmit={submit} />
      </>
    )
  }