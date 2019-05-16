import styled from 'styled-components'
import { colors } from './colors'

export const Alert = styled.div`
  padding: 5px 15px;
  color: ${colors.white};
  border-radius: 3px;
  ${({ type }) => type === 'error' && `background: ${colors.dangerColorDark}`}
`
