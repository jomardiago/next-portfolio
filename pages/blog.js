import Layout from '../components/Layout';
import Link from 'next/link';

const Blog = () => (
    <Layout title="Blog">
        <ul>
            <li><Link as="/react-post" href="/post?title=React"><a>React</a></Link></li>
            <li><Link as="/angular-post" href="/post?title=Angular"><a>Angular</a></Link></li>
            <li><Link as="/nextjs-post" href="/post?title=NextJS"><a>NextJS</a></Link></li>
        </ul>
    </Layout>
);

export default Blog;