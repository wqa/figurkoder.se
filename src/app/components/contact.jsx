import React from 'react'
import InGameHeader from './shared/inGameHeader'

const About = () => {
  return(
    <div>
      <InGameHeader title={"Kontakta mig"} />
      <h6 style={{
          textAlign: 'center',
        }}>Figurkodsträning a lá <a href="http://themindacademy.se">themindacademy.se</a></h6>
      <main style={{
          margin: '10px',
        }}>
          <p>
            Om du har hittat en bugg på applikationen får du gärna rapportera en <a href="https://github.com/OskarKlintrot/figurkoder.se/issues">"issue" på GitHub</a>. Om du är nyfiken på källkoden finns även den på <a href="https://github.com/OskarKlintrot/figurkoder.se">GitHub</a>.
          </p>
          <p>
            Mig kontaktar ni enklast antingen på <a href="https://github.com/OskarKlintrot/">GitHub</a>, <a href="https://www.linkedin.com/in/OskarKlintrot">LinkedIn</a> eller via min mail <a href="mailto:oskar.klintrot@gmail.com">oskar.klintrot@gmail.com</a>.
          </p>
        </main>
    </div>
  )
}

export default About
