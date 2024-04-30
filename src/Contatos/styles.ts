import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 1024px;
  height: 900px;
  background-color: #18344f;
  color: #fff;
`

export const Titulo = styled.h1`
  text-align: center;
  padding-top: 32px;
`

export const Botao = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 8px;
  margin-left: 22px;
  margin-top: 22px;
  padding: 8px;
  color: #18344f;
  cursor: pointer;
`

export const Data = styled.p`
  display: grid;
  grid-template-columns: 200px 256px 256px 256px;
  margin-top: 34px;
  margin-bottom: 0;
  color: #f0bb8a;
  font-size: 20px;

  .nome {
    grid-column-start: 2;
  }
`

export const Contact = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: 200px 256px 256px 256px;
  color: #fff;
  font-size: 25px;
  align-items: center;

  img {
    width: 80px;
    margin-left: 50px;
    border-radius: 50%;
  }

  hr {
    width: 10240px;
    margin-top: 40px;
  }
`
