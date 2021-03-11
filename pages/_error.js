import Layout from '../components/Layout';

const CustomError = ({ statusCode }) => (
    <Layout title="Error">
        {
            statusCode ? <p>Could not load your data with status code of {statusCode}</p> : <p>Couldn't get that page, sorry!</p>
        }
    </Layout>
);

export default CustomError;