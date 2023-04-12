import styled from 'styled-components'

export const ContainerCadastro = styled.div`
   
    align-items: center;


    h1 {
text-transform: uppercase;
text-align: center;
margin: 100px auto;
color:#ff6200;
font-weight: 700;
font-size: 25px;

}

    footer {
        background-color:#114871 ;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 30px;
    }
   

`

export const FormCadastro = styled.form`
display: flex;
flex-wrap: wrap;
align-items: center;
padding: 20px;
margin: 100px 0;
justify-content: space-around;


input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #706f6f;
  font-size: 1.2rem;
  outline: none;
  background-color: transparent;
}

button {
    position: absolute;
    bottom: 30%;
    padding: 10px;
    width: 300px;
    cursor: pointer;
    background-color: #F56C00;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
}


a {
    color: grey;
    font-size: 15px;
    
}



    
`