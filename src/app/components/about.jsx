import React from 'react'
import InGameHeader from './shared/inGameHeader'

const About = () => {
  return(
    <div>
      <InGameHeader title={"Om sidan"} />
      <h6 style={{
          textAlign: 'center',
        }}>Figurkodsträning a lá <a href="http://themindacademy.se">themindacademy.se</a></h6>
      <main style={{
          margin: '10px',
        }}>
      <p>
        Appen är tänkt som ett komplement till <a href="http://mattiasribbing.se/">Mattias Ribbings</a> kurs på <a href="http://www.themindacademy.se/">themindacademy.se/</a>. Denna app är dock inofficiell och har inget samröre med dito sidor och kurser. Denna app är utvecklad helt ideellt.
      </p>
    </main>
    </div>
  )
}

export default About
