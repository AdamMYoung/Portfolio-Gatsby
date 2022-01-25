import { Handler } from '@netlify/functions';
import axios from 'axios'
import { md5 } from "hash-wasm"

const handler: Handler = async (event) => {
    const email = event.queryStringParameters.email;

    if (!email) {
        return { statusCode: 400 };
    }

    const hash = await md5(email.toLowerCase());

    const res = await axios.put(`https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${hash}`,
        { email_address: email, status_if_new: 'pending' },
        { auth: { username: 'anystring', password: process.env.MAILCHIMP_API_KEY } })


    return { statusCode: 200, body: res.data }
};

export { handler };
