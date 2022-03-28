import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

function LayoutsFooter() {
  return (
    <footer className="text-center m-5">
      <Button as={NavLink} to="/" variant="secondary" size="sm" active>
        Back
      </Button>
      <p className="m-5 p-5 fst-italic">Copy Right 2021</p>
    </footer>
  )
}

export default LayoutsFooter
