import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  div{
    padding-left:30px;
    font-size:20px;

  }
  img {
    padding-right: 30px;
  }

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
