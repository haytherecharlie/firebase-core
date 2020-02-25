import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Header = styled('header')({
  zIndex: 100,
  position: 'fixed',
  top: 0,
  left: 0,
  width: `100vw`,
  height: theme.HEADER_HEIGHT,
  background: theme.BACKGROUND_COLOR,
  borderBottom: `1px solid ${theme.PRIMARY_COLOR}`,
  borderTop: `5px solid ${theme.PRIMARY_COLOR}`,
  display: 'flex',
  alignItems: `stretch`,
  justifyContent: 'center'
})

export const Responsive = styled('div')({
  flex: 1,
  maxWidth: theme.LARGE_VIEW,
  display: `flex`,
  flexDirection: 'row',
  alignItems: `center`,
  justifyContent: p => p.justify || `space-between`,
  padding: `0 1rem`
})
