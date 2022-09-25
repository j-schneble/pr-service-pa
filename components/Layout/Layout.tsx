import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <div className='relative w-full h-full min-h-screen bgo '>{children}</div>
}
