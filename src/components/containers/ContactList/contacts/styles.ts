import styled from 'styled-components'
import variaveis from '../../../../styles/variaveis'

export const Container = styled.div`
  margin: 0 auto;
  width: 64%;
  height: 940px;
  background-color: ${variaveis.dark};
  color: ${variaveis.white};
  overflow-y: scroll;
`

export const Titulo = styled.h1`
  text-align: center;
  padding-top: 48px;
`

export const SubTitle = styled.p`
  display: grid;
  grid-template-columns: 200px 256px 256px 256px;
  margin-top: 34px;
  margin-left: 10px;
  margin-bottom: 0;
  color: ${variaveis.orange};
  font-size: 20px;

  .nome {
    grid-column-start: 2;
  }
`
