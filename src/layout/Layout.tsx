import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children = false }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
