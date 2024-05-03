import styled from 'styled-components'
import variaveis from '../../../../styles/variaveis'

export const CC = styled.div`
  display: grid;
  grid-template-columns: 182px 260px 255px 340px;
  width: 95%;
  height: 120px;
  margin: 20px;
  padding: 2px;
  align-items: center;
  background-color: ${variaveis.light};
  border-radius: 20px;

  textarea {
    height: 28px;
    margin: 5px;
    background-color: transparent;
    color: ${variaveis.white};
    border: none;
    font-size: 22px;
    resize: none;
  }

  img {
    width: 80px;
    margin-left: 50px;
    border-radius: 50%;
  }
`
