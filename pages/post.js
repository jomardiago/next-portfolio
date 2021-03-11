import Layout from '../components/Layout';

const Post = ({ url }) => (
    <Layout title={url.query.title}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora eveniet neque sit porro suscipit iusto error aspernatur fugiat nobis!</p>
    </Layout>
);

export default Post;