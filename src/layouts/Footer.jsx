import React from 'react'
import Button from 'react-bootstrap/Button'
import { useLocation, useNavigate } from 'react-router-dom'

import FBLink from '@/images/fb.png'
import IgLink from '@/images/ig.png'
import WaLink from '@/images/wa.png'
import YtLink from '@/images/yt.png'

const whitelist = ['/guitars/electric/', '/guitars/acoustic/']

function LayoutsFooter() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <footer id="footer" className="bd-footer py-5 mt-5 text-center">
      {
        whitelist.filter((urlPiece) => location.pathname.includes(urlPiece)).length > 0 && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate(-1)}
          >Back</Button>
        )
      }
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
              <span className="fs-5" style={{ fontFamily: 'Gloria Hallelujah' }}>S. Y. P.    G U I T A R S</span>
            </a>
            <ul className="list-unstyled small text-muted">
              <img src={FBLink} className="m-3" alt="facebook logo" />
              <img src={IgLink} className="m-3" alt="instagram logo" />
              <img src={WaLink} className="m-3" alt="whatsApp logo" />
              <img src={YtLink} className="m-3" alt="youtube logo" />
              <li className="mb-2" style={{ color: '#fff' }}>Copyright reserved 2021 SYP Guitars.</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2"><a href="/docs/{{ .Site.Params.docs_version }}/">Docs</a></li>
              <li className="mb-2"><a href="/docs/{{ .Site.Params.docs_version }}/examples/">Examples</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.themes }}">Themes</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.blog }}">Blog</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/docs/{{ .Site.Params.docs_version }}/getting-started/">Getting started</a></li>
              <li className="mb-2"><a href="/docs/{{ .Site.Params.docs_version }}/examples/starter-template/">Starter template</a></li>
              <li className="mb-2"><a href="/docs/{{ .Site.Params.docs_version }}/getting-started/webpack/">Webpack</a></li>
              <li className="mb-2"><a href="/docs/{{ .Site.Params.docs_version }}/getting-started/parcel/">Parcel</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="{{ .Site.Params.github_org }}/bootstrap">Bootstrap 5</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.github_org }}/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.github_org }}/icons">Icons</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.github_org }}/rfs">RFS</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.github_org }}/bootstrap-npm-starter">npm starter</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="{{ .Site.Params.github_org }}/bootstrap/issues">Issues</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.github_org }}/bootstrap/discussions">Discussions</a></li>
              <li className="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.opencollective }}">Open Collective</a></li>
              <li className="mb-2"><a href="{{ .Site.Params.slack }}">Slack</a></li>
              <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LayoutsFooter
