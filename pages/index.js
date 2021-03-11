import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Home</h1>
        <Link href="/about">Go to About</Link>
        <p>Welcome to Home Page!</p>
    </div>
);

export default Index;