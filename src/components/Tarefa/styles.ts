import styled from 'styled-components'
import vars from '../../styles/vars'
import * as enums from '../../utils/enums/tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return vars.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return vars.laranja
  } else {
    if (props.status === enums.Status.PENDENTE) return vars.amarelo
    if (props.status === enums.Status.CONCLUIDO) return vars.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  margin-top: 40px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  line-height: 24px;
  color: #8b8b8b;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  background-color: transparent;
  border: none;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  padding-bottom: 20px;
`
