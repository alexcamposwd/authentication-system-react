import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey3};
  }
`