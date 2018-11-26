import React, { Component } from 'react';

 class Resume extends Component {
   render() {
     return (
       <aside id="resume">
        <h1>Resume</h1>
          <header>
            <h2>Rick Crismond</h2>
            <address>
              <a>(954)123-4567</a>
              <a>rickybobby@gmail.com</a>
              "Wyncode Academy"
              <br />
              "549 NW 28th St."
              <br />
              "Miami, FL. 33127"
            </address>
          </header>
            <hr />
              <ol>
                <li>
                  <h3>Computer Skills</h3>
                    <ul>
                      <li>Languages: Javascript, Ruby</li>
                    </ul>
                      <p>Still learning more languages</p>
                  </li>
                </ol>
          </aside>
     )
   }
 }

 export default Resume;
