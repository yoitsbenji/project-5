import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Contato from '../../../../models/Contato'
import { remover, edit } from '../../../../store/reducers/contatos'
import { CC } from './styles'
import { Botao, BotaoCancel, BotaoSave } from '../../../../styles'
type Props = Contato

const Data = ({ nome: defaultName, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    if (defaultName.length > 0) {
      setName(defaultName)
    }
  }, [defaultName])

  function cancelEdit() {
    setIsEditing(false)
    setName(defaultName)
  }

  return (
    <>
      <CC>
        <img src="https://placehold.jp/150x150.png" alt="profile_pic" />
        <textarea disabled={!isEditing}>{defaultName}</textarea>
        <textarea disabled={!isEditing}>{telefone}</textarea>
        <textarea disabled={!isEditing}>{email}</textarea>
      </CC>
      {isEditing ? (
        <>
          <BotaoSave
            type="button"
            onClick={() => {
              dispatch(
                edit({
                  nome: defaultName,
                  id,
                  telefone,
                  email
                })
              )
              setIsEditing(false)
            }}
          >
            Salvar
          </BotaoSave>

          {/* cancel button not working */}
          <BotaoCancel type="button" onClick={cancelEdit}>
            Cancelar
          </BotaoCancel>
        </>
      ) : (
        <>
          <Botao onClick={() => setIsEditing(true)} type="button">
            Editar
          </Botao>
          <BotaoCancel onClick={() => dispatch(remover(id))}>
            Remover
          </BotaoCancel>
        </>
      )}
    </>
  )
}

export default Data
