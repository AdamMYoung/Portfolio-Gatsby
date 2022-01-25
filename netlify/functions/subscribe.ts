import { Handler } from '@netlify/functions';
import axios from 'axios'
import { md5 } from "hash-wasm"

const mailchimpApi = axios.create({
    baseURL: `https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0`,
    auth: { username: 'anystring', password: process.env.MAILCHIMP_API_KEY },
});

const handler: Handler = async (event) => {
    const email = event.queryStringParameters.email;

    if (!email) {
        return { statusCode: 400 };
    }

    await mailchimpApi.put(
        `/lists/${process.env.MAILCHIMP_LIST_ID}/members/${md5(email.toLowerCase())}`,
        { email_address: email, status_if_new: 'pending' },
        { headers: { 'content-type': 'application/json' } }
    );

    return { statusCode: 200, body: 'User subscribed' };
};

export { handler };
