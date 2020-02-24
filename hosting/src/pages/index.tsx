import React, { Fragment } from 'react'
import ButtonPill from 'atoms/ButtonPill'
import Link from 'atoms/Link'
import Logo from 'atoms/Logo'
import Spinner from 'atoms/Spinner'

const Index = () => {
  return (
    <Fragment>
      <h2>ButtonPill</h2>
      <ButtonPill>Hello</ButtonPill>
      <ButtonPill invert="true">Hello</ButtonPill>
      <ButtonPill type="link" to="http://google.ca">
        Hello
      </ButtonPill>
      <ButtonPill type="link" invert="true" to="http://google.ca">
        Hello
      </ButtonPill>
      <h2>Link</h2>
      <Link to="http://google.ca">Google</Link>
      <h2>Logo</h2>
      <Logo />
      <h2>Spinner</h2>
      <Spinner />
    </Fragment>
  )
}

export default Index