import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../../styles/variaveis'

export const Square = styled(Link)`
  display: flex;
  padding: 20px;
  bottom: 40px;
  right: 40px;
  position: fixed;
  background-color: ${variaveis.light};
  color: ${variaveis.white};
  text-decoration: none;
`
