import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>This is the about page of our application.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default About;
