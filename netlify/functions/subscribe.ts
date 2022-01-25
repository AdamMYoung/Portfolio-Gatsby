import { Handler } from '@netlify/functions';
import axios from 'axios';

const mailchimpApi = axios.create({
    baseURL: `https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0`,
    auth: { username: 'anystring', password: process.env.MAILCHIMP_API_KEY },
});

const handler: Handler = async (event) => {
    const email = event.queryStringParameters.email;

    if (!email) {
        return { statusCode: 400 };
    }

    mailchimpApi.post(
        `/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
        { email_address: email, status: 'subscribed' },
        { headers: { 'content-type': 'application/json' } }
    );

    return { statusCode: 200, body: 'User subscribed' };
};

export { handler };
