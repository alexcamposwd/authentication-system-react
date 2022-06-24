import styled from 'styled-components'

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.goldmd};
  }
`