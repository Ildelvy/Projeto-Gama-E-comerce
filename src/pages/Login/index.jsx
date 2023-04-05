import React from 'react'
import LogoPng from '../../assets/img/logo.png' 


import { 
  ContainerLogin, 
  FormLogin,
  ContainerInput,
  ContainerButtons,
  

} 
from '../Login/styles'


import { LogHeader } from "../Home/styles"

const Login = () => {
  return (

    <ContainerLogin>
    <header>
   
 <LogHeader>
            <img src={LogoPng} />
        </LogHeader>
       
        
    </header>

    <FormLogin>

      <h1>fazer login</h1>
      <ContainerInput>
      <input type='text' placeholder='Email' />
      </ContainerInput>
      <ContainerInput>
        <input type='password' placeholder='Senha'/>
      </ContainerInput>

        <ContainerButtons>
          <button type='submit'>Entrar</button>

        </ContainerButtons>

        <a href='#'>Esqueceu a Senha?</a>


    </FormLogin>


    </ContainerLogin>

  
  )
}

export default Login