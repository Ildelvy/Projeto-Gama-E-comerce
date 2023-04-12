import React from 'react'
import { useState } from  'react'
import axios from 'axios'

import { ContainerCadastro,FormCadastro } from '../Cadastro/styles'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 


const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [fone, setFone] = useState('');
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      nome,
      email,
      senha,
      fone,
      tipoUser: '2',
    };
    axios.post('https://api-ecommerce-gamaxp47.herokuapp.com/usuario', data)
      .then(response => { 
        setMensagem('Cadastro criado com sucesso!')
        console.log(response)
    })
      .catch(error => console.log(error));
  }
  
  return (
<ContainerCadastro>

<header>
   
   <LogHeader>
             <a href='/'> <img src={LogoPng} /> </a>
          </LogHeader>
         
          
      </header>
      <h1>criar conta</h1>
    <FormCadastro onSubmit={handleSubmit}>
      
    <label>
      Nome:
      <input type="text" value={nome} onChange={event => setNome(event.target.value)} />
    </label>
    <label>
      Email:
      <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
    </label>
    <label>
      Senha:
      <input type="password" value={senha} onChange={event => setSenha(event.target.value)} />
    </label>
    <label>
      Telefone:
      <input type="tel" value={fone} onChange={event => setFone(event.target.value)} />
    </label>
    <button type="submit">continuar</button>
    {mensagem && <p>{mensagem}</p>}
  </FormCadastro>

  <footer>

  </footer>
  </ContainerCadastro>
  )
}

export default Cadastro