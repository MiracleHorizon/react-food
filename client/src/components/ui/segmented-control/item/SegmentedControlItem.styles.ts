import styled from '@emotion/styled'

export const Root = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  ${p => p.isSelected && `
    background: white;
    box-shadow: 0px 8px 20px rgb(117 115 111 / 10%);
  `};
  transition: background 0.1s ease-out, box-shadow 0.1s ease-out;

  span {
    color: ${p => p.isSelected ? 'inherit' : '#9E9B98'};
  }
`

export const Title = styled.span`
  font-size: 17px;
  margin-right: 4px;
`
