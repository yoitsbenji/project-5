import { FormEvent, useState } from 'react'
import { Botao } from '../../../styles'
import { Container, Titulo } from './styles'
import { useDispatch } from 'react-redux'
import Contato from '../../../models/Contato'
import { cadastrar } from '../../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const newContact = (evento: FormEvent) => {
    evento.preventDefault()
    const contato = new Contato(nome, 2222222, email, 9)
    dispatch(cadastrar(contato))
    navigate('/')
  }

  const handleBack = () => {
    navigate('/')
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
        <Botao type="button" onClick={handleBack}>
          Voltar
        </Botao>
      </form>
    </Container>
  )
}

export default Form
