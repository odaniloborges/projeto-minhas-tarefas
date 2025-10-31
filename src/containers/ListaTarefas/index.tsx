import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const ListaTarefas = () => (
  <S.Container>
    <p>2 tarefas marcadas como: &quot;todas&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </S.Container>
)

export default ListaTarefas
