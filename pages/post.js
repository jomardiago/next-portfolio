import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora eveniet neque sit porro suscipit iusto error aspernatur fugiat nobis!</p>
    </Layout>
);

export default withRouter(Post);