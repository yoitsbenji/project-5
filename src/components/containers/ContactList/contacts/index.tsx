import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store'
import * as S from './styles'
import Data from '../contact-data'

const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Container>
      <S.Titulo>Lista de Contatos</S.Titulo>
      <S.SubTitle>
        <p className="nome">Nome</p>
        <p>Telefone</p>
        <p>E-mail</p>
      </S.SubTitle>
      {itens.map((c) => (
        <ul key={c.nome}>
          <li>
            <Data
              id={c.id}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        </ul>
      ))}
    </S.Container>
  )
}

export default Contatos
