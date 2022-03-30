import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
  text-align: center;
  padding: 20px;
  flex-direction: ${({ layout }) => layout || 'column'};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
