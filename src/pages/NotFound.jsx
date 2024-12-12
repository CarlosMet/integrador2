import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <Link to={'/'}>
        Volver al inicio
      </Link>
    </div>
  )
}
