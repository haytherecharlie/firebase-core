import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, Text } from 'react-native'

export const Wrapper = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `#F8F8F8`,
})

export const Title = styled(Text)({
  fontSize: 20
})