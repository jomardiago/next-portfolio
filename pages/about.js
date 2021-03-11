import Link from 'next/link';

const About = () => (
    <div>
        <h1>About</h1>
        <Link href="/">Go to Home</Link>
        <p>A JavaScript Programmer</p>
        <img src="/javascript-logo.png" alt="JavaScript" height="200px"/>
    </div>
);

export default About;