import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Exo 2", sans-serif;
}`

export const Botao = styled.button`
  background-color: ${variaveis.light};
  border: none;
  border-radius: 8px;
  margin: 0 20px;
  padding: 8px;
  color: #fff;
  cursor: pointer;
`

export const BotaoSave = styled(Botao)`
  background-color: ${variaveis.green};
`

export const BotaoCancel = styled(Botao)`
  background-color: ${variaveis.red};
`

export default GlobalStyle
