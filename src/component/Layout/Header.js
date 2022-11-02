import React from 'react'
import MainNavigation from './MainNavigation'

function Header(props) {
  return (
    <>
      <MainNavigation />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Header
