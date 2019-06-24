import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="resume">
    <header>
      <h1>Sally Student</h1>
    </header>

    <main>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>Westfield High School</li>
          <li>SuperCool University</li>
        </ul>
      </section>
      <section className="employment">
        <h2>Emplployment</h2>
        <ul>
          <li>Super Prestigious Tech Firm</li>
          <p>Coding Chief April 2008-Present</p>
          <p>Ran alllll of the coding at the firm.</p>
          <li>Ultra Kind NonProfit</li>
          <p>Computer Consultant May 2001-April 2008</p>
          <p>Helped sooooo many people.</p>
        </ul>
      </section>

      <section className="contact">
        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Sally Student" />
        <p>Sally Student</p>
        <a href="mailto:sallystudent@gmail.com">Email</a>
        <address>1234 Great St, Houston, TX 77007</address>
        <p>Phone: 281-352-0000</p>
      </section>
    </main>
    </div>

  );
}

export default App;
