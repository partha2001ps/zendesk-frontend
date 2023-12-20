import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div>
      <div className="container">
        <div className="left-side">
          <p>Zen Desk</p>
        </div>
        <div className="right-side">
          <Link to='/signin'>Login</Link>
          <Link to='/mentee-signup'>Admin</Link>
        </div>
      </div>
      <div className="welcome">
  <h1>WELCOME TO OUR ZEN CLASS</h1>
  <p>Unlock your potential with Zen Class, where learning meets inspiration!</p>
</div>

<div className="features">
  <h2>Why Choose Zen Class?</h2>
  <ul>
    <li>Explore a variety of skills training courses</li>
    <li>Engage in interactive and immersive learning experiences</li>
    <li>Connect with industry experts and mentors</li>
    <li>Track your progress and achievements</li>
  </ul>
</div>

<div className="featured-courses">
  <h2>Featured Courses :</h2>
        <ul>
    <li>Full Stack Developer</li>
    <li>Introduction to Web Development</li>
    <li>Graphic Design Masterclass</li>
    <li>Data Science Fundamentals</li>
  </ul>
</div>
<div className="testimonials">
  <h2>What Our Users Say</h2>
  <div className="testimonial-card">
    <h2>John Doe</h2>
    <p>"Zen Class has been a game-changer for my career. The courses are top-notch, and the mentors are incredibly helpful!" - Web Developer</p>
  </div>
  <div className="testimonial-card">
    <h2>Jane Smith</h2>
    <p>"I love the interactive learning experiences. It's like being in a virtual classroom!" - Graphic Designer</p>
  </div>
</div>

      <div className="call-to-action">
        <h2>Ready to embark on your learning journey?</h2>
        <p>Sign up now and start elevating your skills!</p>
        <Link to='/signup'>Get Started</Link>
      </div>
    </div>
  );
}

export default Home;
