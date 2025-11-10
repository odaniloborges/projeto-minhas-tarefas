import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;todas&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaTarefas
