import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;

  display: flex;

  position: relative;

  margin-bottom: ${props => (props.withError ? '5px' : '0px')};

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: ${colors.white};
    border: ${props =>
    props.withError ? `2px solid ${colors.dangerColor}` : 0};
    font-size: 18px;
    color: ${colors.textColor};
    border-radius: 3px;
  }

  button {
    width: 75px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: ${colors.successColor};
    color: ${colors.white};
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: ${colors.successColorDark};
    }
  }
`
