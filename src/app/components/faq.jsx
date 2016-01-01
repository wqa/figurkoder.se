import React from 'react'
import InGameHeader from './shared/inGameHeader'

const About = () => {
  return(
    <div>
      <InGameHeader title={"Vanliga frågor"} />
      <h6 style={{
          textAlign: 'center',
        }}>Figurkodsträning a lá <a href="http://themindacademy.se">themindacademy.se</a></h6>
      <main style={{
          margin: '10px',
        }}>
        <p>
          Figurkoderna baseras på följande alfanumeriska kod:
        </p>
        <table id="Alfanumeric">
          <tbody>
            <tr>
              <td>1</td>
              <td>–</td>
              <td>N</td>
            </tr>
            <tr>
              <td>2</td>
              <td>–</td>
              <td>THZ</td>
            </tr>
            <tr>
              <td>3</td>
              <td>–</td>
              <td>B</td>
            </tr>
            <tr>
              <td>4</td>
              <td>–</td>
              <td>WVK</td>
            </tr>
            <tr>
              <td>5</td>
              <td>–</td>
              <td>FR</td>
            </tr>
            <tr>
              <td>6</td>
              <td>–</td>
              <td>JPX</td>
            </tr>
            <tr>
              <td>7</td>
              <td>–</td>
              <td>SD</td>
            </tr>
            <tr>
              <td>8</td>
              <td>–</td>
              <td>GQL</td>
            </tr>
            <tr>
              <td>9</td>
              <td>–</td>
              <td>C</td>
            </tr>
          </tbody>
        </table>
        <p>
          Den här sidan är skapad av <a href="https://www.linkedin.com/in/OskarKlintrot">Oskar Klintrot</a> och är helt inofficiell.
        </p>
      </main>
    </div>
  )
}

export default About
