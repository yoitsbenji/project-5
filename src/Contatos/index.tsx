import * as S from './styles'

const Contatos = () => {
  return (
    <S.Container>
      <S.Titulo>Lista de Contatos</S.Titulo>
      <S.Botao type="button">Adicionar</S.Botao>
      <S.Botao type="button">Remover</S.Botao>
      <S.Botao type="button">Editar</S.Botao>
      <S.Data>
        <p className="nome">Nome</p>
        <p>Telefone</p>
        <p>E-mail</p>
      </S.Data>
      <S.Contact>
        <img src="https://placehold.jp/150x150.png" alt="profile_pic" />
        <p>benjinho</p>
        <p>11 98104-9837</p>
        <p>benjidelrei@outlook.com</p>
        <hr />
      </S.Contact>
      <S.Contact>
        <img src="https://placehold.jp/150x150.png" alt="profile_pic" />
        <p>benjinho</p>
        <p>11 98104-9837</p>
        <p>benjidelrei@outlook.com</p>
        <hr />
      </S.Contact>
    </S.Container>
  )
}

export default Contatos
