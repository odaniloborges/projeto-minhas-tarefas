import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar Javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'realizar as tarefas do curso',
      1
    ),
    new Tarefa(
      'estudar Javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      2
    ),
    new Tarefa(
      'estudar Javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'realizar as tarefas do curso',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
