import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const List = styled.ul`
  list-style: none;
  max-width: 400px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-top: 15px;
    padding: 10px 15px;
    border-radius: 3px;
    box-shadow: 0px 0px 8px 1px ${colors.boxShadowColorDark};

    background-color: ${colors.white};
    color: ${colors.secondaryColor};

    div {
      width: 100%;

      div {
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        img {
          height: 50px;
        }
        strong {
          color: ${colors.secondaryColorDark};
          margin-left: 5px;
        }
      }

      p {
        margin-bottom: 5px;
      }
    }
    a {
      background-color: ${colors.primaryColorDark};
      color: ${colors.white};
      border-radius: 3px;
      width: 70px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
