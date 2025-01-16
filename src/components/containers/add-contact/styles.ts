import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 20vh;
  width: 800px;
  height: 500px;
  text-align: center;
  background-color: ${variaveis.dark};
  color: ${variaveis.dark};

  input {
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 5px 30px;
    border: none;
    text-align: center;
    display: block;
    color: ${variaveis.dark};
  }
`
export const Titulo = styled.h1`
  padding-top: 48px;
  color: ${variaveis.white};
`
