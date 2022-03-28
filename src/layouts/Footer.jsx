import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const whitelist = ['/guitars/electric/', '/guitars/acoustic/']

function LayoutsFooter() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <footer className="text-center mt-5 mx-5">
      {
        whitelist.filter((urlPiece) => location.pathname.includes(urlPiece)).length > 0 && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate(-1)}
          >Back</Button>
        )
      }
      <p className="mt-5 mb-0 mx-5 p-5 fst-italic">Copy Right 2021</p>
    </footer>
  )
}

export default LayoutsFooter
