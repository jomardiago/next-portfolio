import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

class About extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/jomardiago');
        const user = await res.json();
        return { user };
    }

    render() {
        const { user } = this.props;
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