import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const HamburgerMenu = styled('div')({
  height: `17px`,
  width: `20px`,
  position: `relative`,
  cursor: `pointer`,
})

const defaultLineStyle = {
  width: `100%`,
  height: `3px`,
  background: `#181E38`,
  borderRadius: `5px`,
  position: `absolute`
}

const midLine = `7px`

export const TopLine = styled('div')({
  ...defaultLineStyle,
  transition: `transform .5s, top .5s`,
  top: (p) => (p.open ? midLine : `0px`),
  transform: (p) => (p.open ? `rotate(45deg)` : `none`)
})

export const MidLine = styled('div')({
  ...defaultLineStyle,
  transition: `display .5s`,
  top: midLine,
  display: (p) => (p.open ? `none` : `flex`)
})

export const BottomLine = styled('div')({
  ...defaultLineStyle,
  transition: `transform .5s, top .5s`,
  top: (p) => (p.open ? midLine : `14px`),
  transform: (p) => (p.open ? `rotate(-45deg)` : `none`)
})
