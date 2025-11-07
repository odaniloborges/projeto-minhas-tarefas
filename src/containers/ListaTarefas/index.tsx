import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;todas&quot; e &quot;termo&quot;</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
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
