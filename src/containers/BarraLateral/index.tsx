import { FiltroCard } from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Pesquisar" />
    <S.Filtros>
      <FiltroCard legenda="pendentes" contador={0} />
      <FiltroCard legenda="concluídas" contador={0} />
      <FiltroCard legenda="urgentes" contador={0} />
      <FiltroCard legenda="importantes" contador={0} />
      <FiltroCard legenda="normal" contador={0} />
      <FiltroCard legenda="todas" contador={0} ativo />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
