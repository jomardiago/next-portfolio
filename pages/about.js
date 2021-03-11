import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Error from './_error';

class About extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/jomardiago');
        const statusCode = res.status > 200 ? res.status : false;
        const user = await res.json();
        return { user, statusCode };
    }

    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <Layout title="About">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                <img src={user.avatar_url} alt={user.name} height="200px"/>
            </Layout>
        );
    }
}

export default About;