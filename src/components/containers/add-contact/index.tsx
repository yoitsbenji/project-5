import { FormEvent, useState } from 'react'
import { Botao } from '../../../styles'
import { Container, Rinku, Titulo } from './styles'
import { useDispatch } from 'react-redux'
import Contato from '../../../models/Contato'
import { cadastrar } from '../../../store/reducers/contatos'

const Form = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const newContact = (evento: FormEvent) => {
    evento.preventDefault()
    const toAdd = new Contato(nome, 2222222, email, 9)
    dispatch(cadastrar(toAdd))
  }

  return (
    <Container>
      <Titulo>Adicionar novo Contato</Titulo>
      <form onSubmit={newContact}>
        <input
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          placeholder="Nome"
        />
        <input
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          placeholder="Telefone"
        />
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="E-mail"
        />
        <Botao type="submit">Salvar</Botao>
        <Botao>
          <Rinku href="/">Voltar</Rinku>
        </Botao>
      </form>
    </Container>
  )
}

export default Form
