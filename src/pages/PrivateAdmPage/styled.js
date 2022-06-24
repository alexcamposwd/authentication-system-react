import styled from 'styled-components'

export const Private = styled.div`
  display: flex;
  width: 100%;
  font-size: 40px;
  font-weight: 600;
  padding: 150px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.grey3};

  @media (max-width: 750px) {
    font-size: 35px;
    padding: 140px;
  }
  @media (max-width: 550px) {
    font-size: 30px;
    padding: 120px;
  }
`