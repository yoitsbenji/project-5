import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contato('Benji DEl Rei', 11966666666, 'benjidelrei@outlook.com', 1),
      new Contato('Robertin', 119698455291, 'robertin_proplayer@gmail.com', 2),
      new Contato('Bom dia e Cia', 40028922, 'jogo_da_vida@hotmail.com', 3)
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id != action.payload
      )
    },
    edit: (state, action: PayloadAction<Contato>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const existingContact = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (existingContact) {
        alert('Contato já existente')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, edit, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
