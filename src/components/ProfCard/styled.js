import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 10px;
  background: ${(props) => props.theme.colors.sand};
  cursor: pointer;

  h3 {
    font-size: 20px;
    font-weight: 500;
    padding: 15px;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.grey4};
  }
`