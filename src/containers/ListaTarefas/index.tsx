import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'ver a aula 3 do curso EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar Typescript',
    descricao: 'ver a aula 3 do curso EBAC',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDO
  },
  {
    titulo: 'Estudar Typescript',
    descricao: 'ver a aula 3 do curso EBAC',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaTarefas = () => (
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

export default ListaTarefas
