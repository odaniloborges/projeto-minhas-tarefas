import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <S.Campo
        type="text"
        placeholder="Pesquisar"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <S.Filtros>
        <FiltroCard
          valor={enums.Status.PENDENTE}
          criterio="status"
          legenda="pendentes"
        />
        <FiltroCard
          valor={enums.Status.CONCLUIDO}
          criterio="status"
          legenda="concluídas"
        />
        <FiltroCard
          valor={enums.Prioridade.URGENTE}
          criterio="prioridade"
          legenda="urgentes"
        />
        <FiltroCard
          valor={enums.Prioridade.IMPORTANTE}
          criterio="prioridade"
          legenda="importantes"
        />
        <FiltroCard
          valor={enums.Prioridade.NORMAL}
          criterio="prioridade"
          legenda="normal"
        />
        <FiltroCard criterio="todas" legenda="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
