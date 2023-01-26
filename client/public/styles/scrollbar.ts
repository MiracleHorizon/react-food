import { colors } from './variables'

export const defaultScrollbarStyles = {
  webkitScrollbar: `
  &::-webkit-scrollbar {
    width: 5px;
  };`,
  webkitScrollbarThumb: `
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray['7']};
  };`
}
