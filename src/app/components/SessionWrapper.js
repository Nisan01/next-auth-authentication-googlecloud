"use client"
import { SessionProvider } from 'next-auth/react'

import React from 'react'

function SessionWrapper({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default SessionWrapper